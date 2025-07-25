import type { RouteMeta } from '@analogjs/router';
import { Component } from '@angular/core';
import { hlmH4 } from '@spartan-ng/helm/typography';
import { CodePreviewDirective } from '../../../../shared/code/code-preview.directive';
import { CodeComponent } from '../../../../shared/code/code.component';
import { MainSectionDirective } from '../../../../shared/layout/main-section.directive';

import { PageBottomNavLinkComponent } from '../../../../shared/layout/page-bottom-nav/page-bottom-nav-link.component';
import { PageBottomNavComponent } from '../../../../shared/layout/page-bottom-nav/page-bottom-nav.component';
import { PageNavComponent } from '../../../../shared/layout/page-nav/page-nav.component';
import { SectionIntroComponent } from '../../../../shared/layout/section-intro.component';
import { SectionSubHeadingComponent } from '../../../../shared/layout/section-sub-heading.component';
import { TabsCliComponent } from '../../../../shared/layout/tabs-cli.component';
import { TabsComponent } from '../../../../shared/layout/tabs.component';
import { UIApiDocsComponent } from '../../../../shared/layout/ui-docs-section/ui-docs-section.component';
import { metaWith } from '../../../../shared/meta/meta.util';
import { ContextMenuPreviewWithStateComponent, defaultCodeWithState } from './context-menu-with-state.preview';
import { ContextMenuPreviewComponent, defaultCode, defaultImports, defaultSkeleton } from './context-menu.preview';

export const routeMeta: RouteMeta = {
	data: { breadcrumb: 'Context Menu', api: 'menu' },
	meta: metaWith(
		'spartan/ui - Context Menu',
		'Displays a menu to the user — such as a set of actions or functions — triggered by a right-click.',
	),
	title: 'spartan/ui - Context Menu',
};

@Component({
	selector: 'spartan-command',
	imports: [
		UIApiDocsComponent,
		MainSectionDirective,
		CodeComponent,
		SectionIntroComponent,
		SectionSubHeadingComponent,
		TabsComponent,
		TabsCliComponent,
		CodePreviewDirective,
		PageNavComponent,
		PageBottomNavComponent,
		PageBottomNavLinkComponent,
		ContextMenuPreviewComponent,
		ContextMenuPreviewWithStateComponent,
	],
	template: `
		<section spartanMainSection>
			<spartan-section-intro
				name="Context Menu"
				lead="Displays a menu to the user — such as a set of actions or functions — triggered by a right click."
			/>

			<spartan-tabs firstTab="Preview" secondTab="Code">
				<div spartanCodePreview firstTab>
					<spartan-context-menu-preview />
				</div>
				<spartan-code secondTab [code]="_defaultCode" />
			</spartan-tabs>

			<spartan-section-sub-heading id="installation">Installation</spartan-section-sub-heading>
			<spartan-cli-tabs
				class="mt-4"
				nxCode="npx nx g @spartan-ng/cli:ui contextmenu"
				ngCode="ng @spartan-ng/cli:ui contextmenu"
			/>

			<spartan-section-sub-heading id="usage">Usage</spartan-section-sub-heading>
			<div class="space-y-4">
				<spartan-code [code]="_defaultImports" />
				<spartan-code [code]="_defaultSkeleton" />
			</div>

			<spartan-section-sub-heading id="brn-api">Brain API</spartan-section-sub-heading>
			<spartan-ui-api-docs docType="brain" />

			<spartan-section-sub-heading id="hlm-api">Helm API</spartan-section-sub-heading>
			<spartan-ui-api-docs docType="helm" />

			<h3 id="examples__stateful" class="${hlmH4} mb-2 mt-6">Stateful</h3>
			<spartan-tabs firstTab="Preview" secondTab="Code">
				<div spartanCodePreview firstTab>
					<spartan-context-menu-with-state />
				</div>
				<spartan-code secondTab [code]="_defaultCodeWithState" />
			</spartan-tabs>

			<spartan-page-bottom-nav>
				<spartan-page-bottom-nav-link href="data-table" label="Data Table" />
				<spartan-page-bottom-nav-link direction="previous" href="command" label="Command" />
			</spartan-page-bottom-nav>
		</section>
		<spartan-page-nav />
	`,
})
export default class ComboboxPageComponent {
	protected readonly _defaultCode = defaultCode;
	protected readonly _defaultSkeleton = defaultSkeleton;
	protected readonly _defaultCodeWithState = defaultCodeWithState;
	protected readonly _defaultImports = defaultImports;
}
