import { Component } from '@angular/core';
import { HlmButton } from '@spartan-ng/helm/button';
import { hlmMuted } from '@spartan-ng/helm/typography';

@Component({
	selector: 'spartan-footer',
	imports: [HlmButton],
	host: {
		class: 'block border-t bg-background/95 bg-blur-lg border-border px-4 py-8',
	},
	template: `
		<footer class="${hlmMuted} mx-auto max-w-screen-xl text-sm">
			Development powered by
			<a class="h-6 px-0.5 text-sm" hlmBtn href="https://zerops.io" target="_blank" variant="link">Zerops.</a>
			Open source and available on
			<a class="h-6 px-0.5 text-sm" hlmBtn href="https://github.com/goetzrobin/spartan" target="_blank" variant="link">
				GitHub.
			</a>
		</footer>
	`,
})
export class Footer {}
