// eslint-disable -- auto-generated
// prettier-ignore -- auto-generated
/*
DO NOT EDIT THIS FILE!!
It is automatically generated by the extract-primitive-code generator.
Instead, edit the `(pagination).preview.ts` file or the generator itself.
Run `pnpm run generate-snippets` to update this file.
*/

export const paginationAdvancedQueryCode = `
import { Component, computed, inject, numberAttribute, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { HlmNumberedPaginationQueryParams } from '@spartan-ng/helm/pagination';
import { map } from 'rxjs/operators';

@Component({
	selector: 'spartan-pagination-advanced-query-params',
	imports: [HlmNumberedPaginationQueryParams],
	template: \`
		<hlm-numbered-pagination-query-params
			[currentPage]="page()"
			[(itemsPerPage)]="pageSize"
			[totalItems]="totalProducts()"
		/>
	\`,
})
export class PaginationAdvancedQuery {
	private readonly _route = inject(ActivatedRoute);

	/**
	 * Alternative would be to enable \`withComponentInputBinding\` in \`provideRouter\`.
	 * Than you can bind \`input\` signal to the query param.
	 *
	 * \`\`\`ts
	 * pageQuery = input<number, NumberInput>(1, {
	 *   alias: 'page',
	 *   transform: (value) => numberAttribute(value, 1),
	 * });
	 * \`\`\`
	 *
	 * This can replace \`_pageQuery\` and \`page\` computed property.
	 */
	private readonly _pageQuery = toSignal(
		this._route.queryParamMap.pipe(
			map((params) => {
				const pageQuery = params.get('page');
				return pageQuery ? numberAttribute(pageQuery, 1) : undefined;
			}),
		),
	);
	public page = computed(() => this._pageQuery() ?? 1);
	public pageSize = signal(10);
	public totalProducts = signal(100);
}
`;

export const paginationAdvancedCode = `
import { Component, signal } from '@angular/core';
import { HlmNumberedPagination } from '@spartan-ng/helm/pagination';

@Component({
	selector: 'spartan-pagination-advanced',
	imports: [HlmNumberedPagination],
	template: \`
		<hlm-numbered-pagination [(currentPage)]="page" [(itemsPerPage)]="pageSize" [totalItems]="totalProducts()" />
	\`,
})
export class PaginationAdvanced {
	public page = signal(1);
	public pageSize = signal(10);
	public totalProducts = signal(100);
}
`;

export const paginationIconOnlyCode = `
import { Component } from '@angular/core';
import {
	HlmPagination,
	HlmPaginationContent,
	HlmPaginationEllipsis,
	HlmPaginationItem,
	HlmPaginationLink,
	HlmPaginationNext,
	HlmPaginationPrevious,
} from '@spartan-ng/helm/pagination';

@Component({
	selector: 'spartan-pagination-icon-only',
	imports: [
		HlmPagination,
		HlmPaginationContent,
		HlmPaginationItem,
		HlmPaginationPrevious,
		HlmPaginationNext,
		HlmPaginationLink,
		HlmPaginationEllipsis,
	],
	template: \`
		<nav hlmPagination>
			<ul hlmPaginationContent>
				<li hlmPaginationItem>
					<hlm-pagination-previous iconOnly="true" link="/components/menubar" />
				</li>
				<li hlmPaginationItem>
					<a hlmPaginationLink link="#">1</a>
				</li>
				<li hlmPaginationItem>
					<a hlmPaginationLink link="#" isActive>2</a>
				</li>
				<li hlmPaginationItem>
					<a hlmPaginationLink link="#">3</a>
				</li>
				<li hlmPaginationItem>
					<hlm-pagination-ellipsis />
				</li>
				<li hlmPaginationItem>
					<hlm-pagination-next iconOnly="true" link="/components/popover" />
				</li>
			</ul>
		</nav>
	\`,
})
export class PaginationIconOnly {}
`;

export const paginationQueryParamsCode = `
import { Component, computed, inject, numberAttribute } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import {
	HlmPagination,
	HlmPaginationContent,
	HlmPaginationItem,
	HlmPaginationLink,
	HlmPaginationNext,
	HlmPaginationPrevious,
} from '@spartan-ng/helm/pagination';
import { map } from 'rxjs/operators';

@Component({
	selector: 'spartan-pagination-query-params',
	imports: [
		HlmPagination,
		HlmPaginationContent,
		HlmPaginationItem,
		HlmPaginationPrevious,
		HlmPaginationNext,
		HlmPaginationLink,
	],
	template: \`
		<nav hlmPagination>
			<ul hlmPaginationContent>
				@if (currentPage() > 1) {
					<li hlmPaginationItem>
						<hlm-pagination-previous link="." [queryParams]="{ page: currentPage() - 1 }" queryParamsHandling="merge" />
					</li>
				}
				@for (page of pages; track 'page_' + page) {
					<li hlmPaginationItem>
						<a
							hlmPaginationLink
							[link]="currentPage() !== page ? '.' : undefined"
							[queryParams]="{ page }"
							queryParamsHandling="merge"
							[isActive]="currentPage() === page"
						>
							{{ page }}
						</a>
					</li>
				}

				@if (currentPage() < pages[pages.length - 1]) {
					<li hlmPaginationItem>
						<hlm-pagination-next link="." [queryParams]="{ page: currentPage() + 1 }" queryParamsHandling="merge" />
					</li>
				}
			</ul>
		</nav>
	\`,
})
export class PaginationQueryParams {
	private readonly _route = inject(ActivatedRoute);

	/**
	 * Alternative would be to enable \`withComponentInputBinding\` in \`provideRouter\`.
	 * Than you can bind \`input\` signal to the query param.
	 *
	 * \`\`\`ts
	 * pageQuery = input<number, NumberInput>(1, {
	 *   alias: 'page',
	 *   transform: (value) => numberAttribute(value, 1),
	 * });
	 * \`\`\`
	 *
	 * This can replace \`_pageQuery\` and \`currentPage\` computed property.
	 */
	private readonly _pageQuery = toSignal(
		this._route.queryParamMap.pipe(
			map((params) => {
				const pageQuery = params.get('page');
				return pageQuery ? numberAttribute(pageQuery, 1) : undefined;
			}),
		),
	);

	public currentPage = computed(() => this._pageQuery() ?? 1);

	public pages = [1, 2, 3, 4];
}
`;

export const defaultCode = `
import { Component } from '@angular/core';
import {
	HlmPagination,
	HlmPaginationContent,
	HlmPaginationEllipsis,
	HlmPaginationItem,
	HlmPaginationLink,
	HlmPaginationNext,
	HlmPaginationPrevious,
} from '@spartan-ng/helm/pagination';

@Component({
	selector: 'spartan-pagination-preview',
	imports: [
		HlmPagination,
		HlmPaginationContent,
		HlmPaginationItem,
		HlmPaginationPrevious,
		HlmPaginationNext,
		HlmPaginationLink,
		HlmPaginationEllipsis,
	],
	template: \`
		<nav hlmPagination>
			<ul hlmPaginationContent>
				<li hlmPaginationItem>
					<hlm-pagination-previous link="/components/menubar" />
				</li>
				<li hlmPaginationItem>
					<a hlmPaginationLink link="#">1</a>
				</li>
				<li hlmPaginationItem>
					<a hlmPaginationLink link="#" isActive>2</a>
				</li>
				<li hlmPaginationItem>
					<a hlmPaginationLink link="#">3</a>
				</li>
				<li hlmPaginationItem>
					<hlm-pagination-ellipsis />
				</li>
				<li hlmPaginationItem>
					<hlm-pagination-next link="/components/popover" />
				</li>
			</ul>
		</nav>
	\`,
})
export class PaginationPreview {}
`;
