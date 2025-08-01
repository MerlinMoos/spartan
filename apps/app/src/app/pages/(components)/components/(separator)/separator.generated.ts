// eslint-disable -- auto-generated
// prettier-ignore -- auto-generated
/*
DO NOT EDIT THIS FILE!!
It is automatically generated by the extract-primitive-code generator.
Instead, edit the `(separator).preview.ts` file or the generator itself.
Run `pnpm run generate-snippets` to update this file.
*/

export const defaultCode = `
import { Component } from '@angular/core';
import { BrnSeparator } from '@spartan-ng/brain/separator';
import { HlmSeparator } from '@spartan-ng/helm/separator';

@Component({
	selector: 'spartan-separator-preview',
	imports: [HlmSeparator, BrnSeparator],
	template: \`
		<div>
			<div class="space-y-1">
				<h4 class="text-sm font-medium leading-none">Radix Primitives</h4>
				<p class="text-muted-foreground text-sm">An open-source UI component library.</p>
			</div>
			<brn-separator hlmSeparator class="my-4" />
			<div class="flex h-5 items-center space-x-4 text-sm">
				<div>Blog</div>
				<brn-separator decorative hlmSeparator orientation="vertical" />
				<div>Docs</div>
				<brn-separator decorative hlmSeparator orientation="vertical" />
				<div>Source</div>
			</div>
		</div>
	\`,
})
export class SeparatorPreview {}
`;
