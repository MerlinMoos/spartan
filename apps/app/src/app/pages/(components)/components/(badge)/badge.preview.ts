import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideBadgeCheck } from '@ng-icons/lucide';
import { HlmBadge } from '@spartan-ng/helm/badge';

@Component({
	selector: 'spartan-badge-preview',
	imports: [HlmBadge, NgIcon],
	providers: [provideIcons({ lucideBadgeCheck })],
	template: `
		<div class="flex flex-col items-center gap-2">
			<div class="flex w-full flex-wrap gap-2">
				<span hlmBadge>Badge</span>
				<span hlmBadge variant="secondary">Secondary</span>
				<span hlmBadge variant="destructive">Destructive</span>
				<span hlmBadge variant="outline">Outline</span>
			</div>
			<div class="flex w-full flex-wrap gap-2">
				<span hlmBadge variant="secondary" class="bg-blue-500 text-white dark:bg-blue-600">
					<ng-icon name="lucideBadgeCheck" />
					Verified
				</span>
				<span hlmBadge class="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums">8</span>
				<span hlmBadge class="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums" variant="destructive">99</span>
				<span hlmBadge class="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums" variant="outline">20+</span>
			</div>
		</div>
	`,
})
export class BadgePreview {}

export const defaultImports = `
import { HlmBadgeDirective } from '@spartan-ng/helm/badge';
`;

export const defaultSkeleton = `
<span hlmBadge variant="default | outline | secondary | destructive">Badge</span>
`;
