import { Directive, computed, input } from '@angular/core';
import { hlm } from '@spartan-ng/brain/core';
import { BrnSelectGroup } from '@spartan-ng/brain/select';
import type { ClassValue } from 'clsx';

@Directive({
	selector: '[hlmSelectGroup], hlm-select-group',
	hostDirectives: [BrnSelectGroup],
	host: {
		'[class]': '_computedClass()',
	},
})
export class HlmSelectGroup {
	public readonly userClass = input<ClassValue>('', { alias: 'class' });
	protected readonly _computedClass = computed(() => hlm(this.userClass()));
}
