import { Component, type OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { HlmFormFieldModule } from '@spartan-ng/helm/form-field';
import { HlmInput } from '@spartan-ng/helm/input';

@Component({
	selector: 'spartan-form-field-error',
	imports: [ReactiveFormsModule, HlmFormFieldModule, HlmInput],
	template: `
		<hlm-form-field>
			<input aria-label="Your Name" class="w-80" [formControl]="name" hlmInput type="text" placeholder="Your Name" />
			<hlm-error>Your name is required</hlm-error>
		</hlm-form-field>
	`,
})
export class FormFieldErrorPreview implements OnInit {
	public name = new FormControl('', Validators.required);

	ngOnInit(): void {
		this.name.markAsTouched();
	}
}
