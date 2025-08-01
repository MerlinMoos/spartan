import { coerceNumberProperty } from '@angular/cdk/coercion';
import { Directive, inject, input } from '@angular/core';
import { BrnDialogRef } from './brn-dialog-ref';

@Directive({
	selector: 'button[brnDialogClose]',
	host: {
		'(click)': 'close()',
	},
})
export class BrnDialogClose {
	private readonly _brnDialogRef = inject(BrnDialogRef);

	public readonly delay = input<number | undefined, number>(undefined, { transform: coerceNumberProperty });

	public close() {
		this._brnDialogRef.close(undefined, this.delay());
	}
}
