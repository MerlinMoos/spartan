import { inject, InjectionToken, type ValueProvider } from '@angular/core';
import type { HlmCardConfig } from './hlm-card';

const defaultConfig: HlmCardConfig = {
	size: 'default',
};

const HlmCardConfigToken = new InjectionToken<HlmCardConfig>('HlmCardConfig');

export function provideHlmCardConfig(config: Partial<HlmCardConfig>): ValueProvider {
	return { provide: HlmCardConfigToken, useValue: { ...defaultConfig, ...config } };
}

export function injectHlmCardConfig(): HlmCardConfig {
	return inject(HlmCardConfigToken, { optional: true }) ?? defaultConfig;
}
