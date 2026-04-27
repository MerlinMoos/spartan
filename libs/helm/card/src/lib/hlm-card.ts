import { Directive, input } from '@angular/core';
import { classes } from '@spartan-ng/helm/utils';
import { injectHlmCardConfig } from './hlm-card.token';

export type HlmCardConfig = {
	size: 'sm' | 'default';
};

@Directive({
	selector: '[hlmCard],hlm-card',
	host: {
		'data-slot': 'card',
		'[attr.data-size]': 'size()',
	},
})
export class HlmCard {
	private readonly _defaultConfig = injectHlmCardConfig();
	public readonly size = input<HlmCardConfig['size']>(this._defaultConfig.size);

	constructor() {
		classes(() => 'spartan-card group/card flex flex-col');
	}
}
