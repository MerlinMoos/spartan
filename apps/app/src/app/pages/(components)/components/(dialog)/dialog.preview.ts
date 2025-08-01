import { Component } from '@angular/core';
import { BrnDialogContent, BrnDialogTrigger } from '@spartan-ng/brain/dialog';
import { HlmButton } from '@spartan-ng/helm/button';
import {
	HlmDialog,
	HlmDialogContent,
	HlmDialogDescription,
	HlmDialogFooter,
	HlmDialogHeader,
	HlmDialogTitle,
} from '@spartan-ng/helm/dialog';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmLabel } from '@spartan-ng/helm/label';

@Component({
	selector: 'spartan-dialog-preview',
	imports: [
		BrnDialogTrigger,
		BrnDialogContent,
		HlmDialog,
		HlmDialogContent,
		HlmDialogHeader,
		HlmDialogFooter,
		HlmDialogTitle,
		HlmDialogDescription,
		HlmLabel,
		HlmInput,
		HlmButton,
	],
	template: `
		<hlm-dialog>
			<button id="edit-profile" brnDialogTrigger hlmBtn>Edit Profile</button>
			<hlm-dialog-content class="sm:max-w-[425px]" *brnDialogContent="let ctx">
				<hlm-dialog-header>
					<h3 hlmDialogTitle>Edit profile</h3>
					<p hlmDialogDescription>Make changes to your profile here. Click save when you're done.</p>
				</hlm-dialog-header>
				<div class="grid gap-4 py-4">
					<div class="grid grid-cols-4 items-center gap-4">
						<label hlmLabel for="name" class="text-right">Name</label>
						<input hlmInput id="name" value="Pedro Duarte" class="col-span-3" />
					</div>
					<div class="grid grid-cols-4 items-center gap-4">
						<label hlmLabel for="username" class="text-right">Username</label>
						<input hlmInput id="username" value="@peduarte" class="col-span-3" />
					</div>
				</div>
				<hlm-dialog-footer>
					<button hlmBtn type="submit">Save changes</button>
				</hlm-dialog-footer>
			</hlm-dialog-content>
		</hlm-dialog>
	`,
})
export class DialogPreview {}

export const defaultImports = `
import { BrnDialogContentDirective, BrnDialogTriggerDirective } from '@spartan-ng/brain/dialog';
import {
  HlmDialog
  HlmDialogContent
  HlmDialogDescription
  HlmDialogFooter
  HlmDialogHeader
  HlmDialogTitle
} from '@spartan-ng/helm/dialog';
`;

export const defaultSkeleton = `
<hlm-dialog>
  <button brnDialogTrigger hlmBtn>Edit Profile</button>
  <hlm-dialog-content *brnDialogContent="let ctx">
    <hlm-dialog-header>
      <h3 brnDialogTitle hlm>Edit profile</h3>
      <p brnDialogDescription hlm>Make changes to your profile here. Click save when you're done.</p>
    </hlm-dialog-header>
    <hlm-dialog-footer>
      <button hlmBtn type="submit">Save changes</button>
    </hlm-dialog-footer>
  </hlm-dialog-content>
</hlm-dialog>
`;
