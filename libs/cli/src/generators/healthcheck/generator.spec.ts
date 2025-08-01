import { readJson, Tree, writeJson } from '@nx/devkit';
import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { healthcheckGenerator } from './generator';

describe('healthcheck generator', () => {
	let tree: Tree;

	beforeEach(async () => {
		tree = createTreeWithEmptyWorkspace();

		writeJson(tree, 'package.json', {
			dependencies: {
				'@spartan-ng/brain': '0.0.1-alpha.300',
				'@spartan-ng/ui-checkbox-brain': '0.0.1-alpha.300',
			},
			devDependencies: {
				'@spartan-ng/cli': '0.0.1-alpha.300',
			},
		});

		// add a file with legacy imports
		tree.write(
			'libs/my-lib/src/index.ts',
			`
			import { BrnCheckbox } from '@spartan-ng/ui-checkbox-brain';
			import { hlm } from '@spartan-ng/ui-core';
			import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
		`,
		);

		// add a file with a helm icon
		tree.write(
			'libs/my-lib/src/app.component.html',
			`
			<hlm-icon />
			<hlm-scroll-area />
		`,
		);

		// add a file with legacy naming conventions
		tree.write(
			'libs/my-lib/src/legacy.component.ts',
			`			import { HlmMenuItemRadioComponent } from '@spartan-ng/helm/menu';
			import { BrnTooltipContentDirective } from '@spartan-ng/brain/tooltip';
			import { BrnSelectValueDirective } from '@spartan-ng/brain/select';
			`,
		);

		await healthcheckGenerator(tree, { skipFormat: true, autoFix: true });
	});

	it('should update to latest dependencies', () => {
		const packageJson = readJson(tree, 'package.json');

		expect(packageJson.dependencies['@spartan-ng/brain']).not.toEqual('0.0.1-alpha.300');
		expect(packageJson.devDependencies['@spartan-ng/cli']).not.toEqual('0.0.1-alpha.300');
	});

	it('should update brain imports', () => {
		const contents = tree.read('libs/my-lib/src/index.ts', 'utf-8');

		expect(contents).not.toContain('@spartan-ng/ui-checkbox-brain');
		expect(contents).toContain('@spartan-ng/brain/checkbox');

		// check if package.json was updated
		const packageJson = readJson(tree, 'package.json');
		expect(packageJson.dependencies['@spartan-ng/ui-checkbox-brain']).toBeUndefined();
	});

	it('should update core imports', () => {
		const contents = tree.read('libs/my-lib/src/index.ts', 'utf-8');

		expect(contents).not.toContain('@spartan-ng/ui-core');
		expect(contents).toContain('@spartan-ng/brain/core');
	});

	it('should update helm imports', () => {
		const contents = tree.read('libs/my-lib/src/index.ts', 'utf-8');

		expect(contents).not.toContain('@spartan-ng/ui-button-helm');
		expect(contents).toContain('@spartan-ng/helm/button');
	});

	it('should update helm icons', () => {
		const contents = tree.read('libs/my-lib/src/app.component.html', 'utf-8');

		expect(contents).not.toContain('<hlm-icon');
		expect(contents).toContain('<ng-icon hlm');
	});

	it('should update helm scroll areas', () => {
		const contents = tree.read('libs/my-lib/src/app.component.html', 'utf-8');

		expect(contents).not.toContain('<hlm-scroll-area');
		expect(contents).toContain('<ng-scrollbar hlm');
	});

	it('should update naming conventions', () => {
		const contents = tree.read('libs/my-lib/src/legacy.component.ts', 'utf-8');

		expect(contents).toContain('HlmMenuItemRadioIndicator');
		expect(contents).not.toContain('BrnTooltipContentDirective');
		expect(contents).toContain('BrnTooltipContentTemplate');
		expect(contents).not.toContain('BrnSelectValueDirective');
		expect(contents).toContain('BrnSelectValueTemplate');
	});
});
