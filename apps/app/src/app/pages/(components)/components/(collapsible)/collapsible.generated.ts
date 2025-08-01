// eslint-disable -- auto-generated
// prettier-ignore -- auto-generated
/*
DO NOT EDIT THIS FILE!!
It is automatically generated by the extract-primitive-code generator.
Instead, edit the `(collapsible).preview.ts` file or the generator itself.
Run `pnpm run generate-snippets` to update this file.
*/

export const defaultCode = `
import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronsUpDown } from '@ng-icons/lucide';
import { BrnCollapsibleImports } from '@spartan-ng/brain/collapsible';
import { HlmButton } from '@spartan-ng/helm/button';

@Component({
	selector: 'spartan-collapsible-preview',
	imports: [BrnCollapsibleImports, HlmButton, NgIcon],
	providers: [provideIcons({ lucideChevronsUpDown })],
	template: \`
		<brn-collapsible class="flex w-[350px] flex-col gap-2">
			<div class="flex items-center justify-between gap-4 px-4">
				<h4 class="text-sm font-semibold">&#64;peduarte starred 3 repositories</h4>
				<button brnCollapsibleTrigger hlmBtn variant="ghost" size="icon" class="size-8">
					<ng-icon name="lucideChevronsUpDown" />
				</button>
			</div>
			<div class="rounded-md border px-4 py-2 font-mono text-sm">&#64;radix-ui/primitives</div>
			<brn-collapsible-content class="flex flex-col gap-2">
				<div class="rounded-md border px-4 py-2 font-mono text-sm">&#64;radix-ui/colors</div>
				<div class="rounded-md border px-4 py-2 font-mono text-sm">&#64;stitches/react</div>
			</brn-collapsible-content>
		</brn-collapsible>
	\`,
})
export class CollapsiblePreview {}
`;
