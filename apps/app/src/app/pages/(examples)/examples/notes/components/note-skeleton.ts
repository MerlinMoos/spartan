import { Component } from '@angular/core';
import { HlmCard, HlmCardContent, HlmCardDescription, HlmCardFooter, HlmCardHeader } from '@spartan-ng/helm/card';
import { HlmSkeleton } from '@spartan-ng/helm/skeleton';

@Component({
	// eslint-disable-next-line @angular-eslint/component-selector
	selector: 'analog-trpc-note-skeleton',
	host: {
		class: 'block',
	},
	hostDirectives: [HlmCard],
	imports: [HlmCardContent, HlmCardDescription, HlmCardFooter, HlmCardHeader, HlmSkeleton],
	template: `
		<div hlmCardHeader>
			<hlm-skeleton class="h-[25px] w-[150px]" />
			<hlm-skeleton hlmCardDescription class="h-[20px] w-[100px]" />
		</div>
		<div hlmCardContent class="flex flex-col space-y-2">
			<hlm-skeleton class="h-[25px] w-full" />
			<hlm-skeleton class="h-[25px] w-full" />
		</div>
		<div hlmCardFooter class="justify-end">
			<hlm-skeleton class="h-[40px] w-[110px]" />
		</div>
	`,
})
export class NoteSkeleton {}
