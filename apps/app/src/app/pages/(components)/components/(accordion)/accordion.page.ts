import type { RouteMeta } from '@analogjs/router';
import { Component } from '@angular/core';
import { hlmCode, hlmH4 } from '@spartan-ng/helm/typography';
import { CodePreviewDirective } from '../../../../shared/code/code-preview.directive';
import { CodeComponent } from '../../../../shared/code/code.component';
import { MainSectionDirective } from '../../../../shared/layout/main-section.directive';
import { PageBottomNavPlaceholderComponent } from '../../../../shared/layout/page-bottom-nav-placeholder.component';
import { PageBottomNavLinkComponent } from '../../../../shared/layout/page-bottom-nav/page-bottom-nav-link.component';
import { PageBottomNavComponent } from '../../../../shared/layout/page-bottom-nav/page-bottom-nav.component';
import { PageNavComponent } from '../../../../shared/layout/page-nav/page-nav.component';
import { SectionIntroComponent } from '../../../../shared/layout/section-intro.component';
import { SectionSubHeadingComponent } from '../../../../shared/layout/section-sub-heading.component';
import { TabsCliComponent } from '../../../../shared/layout/tabs-cli.component';
import { TabsComponent } from '../../../../shared/layout/tabs.component';
import { UIApiDocsComponent } from '../../../../shared/layout/ui-docs-section/ui-docs-section.component';
import { metaWith } from '../../../../shared/meta/meta.util';
import { AccordionMultipleOpenedComponent } from './accordion--multiple-opened.example';
import { accordionMultipleOpenedCode, defaultCode } from './accordion.generated';
import { AccordionPreviewComponent, defaultImports, defaultSkeleton } from './accordion.preview';

export const routeMeta: RouteMeta = {
	data: { breadcrumb: 'Accordion', api: 'accordion' },
	meta: metaWith(
		'spartan/ui - Accordion',
		'A vertically stacked set of interactive headings that each reveal a section of content.',
	),
	title: 'spartan/ui - Accordion',
};

@Component({
	selector: 'spartan-accordion',
	imports: [
		MainSectionDirective,
		CodeComponent,
		SectionIntroComponent,
		SectionSubHeadingComponent,
		TabsComponent,
		TabsCliComponent,
		AccordionPreviewComponent,
		AccordionMultipleOpenedComponent,
		CodePreviewDirective,
		PageNavComponent,
		PageBottomNavComponent,
		PageBottomNavLinkComponent,
		PageBottomNavPlaceholderComponent,
		UIApiDocsComponent,
	],
	template: `
		<section spartanMainSection>
			<spartan-section-intro
				name="Accordion"
				lead="A vertically stacked set of interactive headings that each reveal a section of content."
			/>

			<spartan-tabs firstTab="Preview" secondTab="Code">
				<div spartanCodePreview firstTab>
					<spartan-accordion-preview />
				</div>
				<spartan-code secondTab [code]="_code" />
			</spartan-tabs>

			<spartan-section-sub-heading id="installation">Installation</spartan-section-sub-heading>
			<spartan-cli-tabs
				class="mt-4"
				nxCode="npx nx g @spartan-ng/cli:ui accordion"
				ngCode="ng g @spartan-ng/cli:ui accordion"
			/>

			<spartan-section-sub-heading id="usage">Usage</spartan-section-sub-heading>
			<div class="space-y-4">
				<spartan-code [code]="_imports" />
				<spartan-code [code]="_skeleton" />
			</div>

			<spartan-section-sub-heading id="brn-api">Brain API</spartan-section-sub-heading>
			<spartan-ui-api-docs docType="brain" />

			<spartan-section-sub-heading id="hlm-api">Helm API</spartan-section-sub-heading>
			<spartan-ui-api-docs docType="helm" />

			<spartan-section-sub-heading id="examples">Examples</spartan-section-sub-heading>
			<h3 id="examples__multiple_opened" class="${hlmH4} mb-2 mt-6">Multiple and Opened</h3>
			<p class="pt-2">
				The
				<code class="${hlmCode}">type</code>
				input can be set to 'multiple' to allow multiple items to be opened at the same time.
			</p>
			<p class="pb-2">
				The
				<code class="${hlmCode}">isOpened</code>
				input can be used to set the initial state of an accordion item.
			</p>
			<spartan-tabs firstTab="Preview" secondTab="Code">
				<div spartanCodePreview firstTab>
					<spartan-accordion-multiple-opened />
				</div>
				<spartan-code secondTab [code]="_multipleOpenedCode" />
			</spartan-tabs>

			<spartan-page-bottom-nav>
				<spartan-page-bottom-nav-link href="alert" label="Alert" />
				<spartan-page-bottom-nav-placeholder />
			</spartan-page-bottom-nav>
		</section>
		<spartan-page-nav />
	`,
})
export default class AccordionPageComponent {
	protected readonly _code = defaultCode;
	protected readonly _imports = defaultImports;
	protected readonly _skeleton = defaultSkeleton;
	protected readonly _multipleOpenedCode = accordionMultipleOpenedCode;
}
