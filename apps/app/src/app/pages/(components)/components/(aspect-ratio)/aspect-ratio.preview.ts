import { Component } from '@angular/core';
import { HlmAspectRatio } from '@spartan-ng/helm/aspect-ratio';

@Component({
	selector: 'spartan-aspect-ratio-preview',
	imports: [HlmAspectRatio],
	template: `
		<div class="max-w-xl overflow-hidden rounded-xl drop-shadow">
			<div [hlmAspectRatio]="16 / 9">
				<img alt="Mountain views" src="/assets/mountains.jpg" />
			</div>
		</div>
	`,
})
export class AspectRatioPreview {}

export const defaultImports = `
import { HlmAspectRatioDirective } from '@spartan-ng/helm/aspect-ratio';
`;

export const defaultSkeleton = `
<div class="max-w-xl overflow-hidden rounded-xl drop-shadow">
  <div [hlmAspectRatio]="ratio">
    <img alt="Mountain views" src="/mountains.jpg" />
  </div>
</div>
`;
