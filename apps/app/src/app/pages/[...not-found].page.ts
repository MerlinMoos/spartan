import type { RouteMeta } from '@analogjs/router';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { metaWith } from '@spartan-ng/app/app/shared/meta/meta.util';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmSeparator } from '@spartan-ng/helm/separator';
import { hlmH3, hlmMuted } from '@spartan-ng/helm/typography';

export const routeMeta: RouteMeta = {
	data: { breadcrumb: 'Not Found' },
	meta: metaWith('spartan - Page not found', 'Seems like you got lost browsing spartan.'),
	title: 'spartan - Page not found',
};

@Component({
	selector: 'spartan-not-found',
	imports: [HlmSeparator, HlmButton, RouterLink],
	host: {
		class: 'h-full flex flex-col items-center justify-center',
	},
	template: `
		<div class="-mt-[25%] mb-8 flex items-center">
			<h1 class="${hlmH3}">404</h1>
			<hr hlmSeparator class="mx-4 h-8" orientation="vertical" />
			<p class="${hlmMuted}">This page could not be found</p>
		</div>
		<a routerLink="/" size="sm" class="text-xs" hlmBtn variant="link">Back home</a>
	`,
})
export default class NotFound {}
