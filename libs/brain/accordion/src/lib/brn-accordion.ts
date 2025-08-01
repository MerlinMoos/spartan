import { FocusKeyManager, FocusMonitor } from '@angular/cdk/a11y';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import {
	type AfterContentInit,
	Directive,
	ElementRef,
	HostListener,
	type OnDestroy,
	computed,
	contentChildren,
	effect,
	inject,
	input,
	signal,
	untracked,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { fromEvent } from 'rxjs';

@Directive({
	selector: '[brnAccordionItem]',
	host: {
		'[attr.data-state]': 'state()',
	},
	exportAs: 'brnAccordionItem',
})
export class BrnAccordionItem {
	private static _itemIdGenerator = 0;
	private readonly _accordion = inject(BrnAccordion);
	/**
	 * Whether the accordion item is opened or closed.
	 * @default false
	 */
	public readonly isOpened = input<boolean, BooleanInput>(false, { transform: coerceBooleanProperty });

	public readonly id = BrnAccordionItem._itemIdGenerator++;
	public readonly state = computed(() => (this._accordion.openItemIds().includes(this.id) ? 'open' : 'closed'));

	constructor() {
		if (!this._accordion) {
			throw Error('Accordion trigger can only be used inside an Accordion. Add brnAccordion to ancestor.');
		}
		effect(() => {
			const isOpened = this.isOpened();
			untracked(() => {
				if (isOpened) {
					this._accordion.openItem(this.id);
				} else {
					this._accordion.closeItem(this.id);
				}
			});
		});
	}
}

@Directive({
	selector: '[brnAccordionTrigger]',
	host: {
		'[attr.data-state]': 'state()',
		'[attr.aria-expanded]': 'state() === "open"',
		'[attr.aria-controls]': 'ariaControls',
		role: 'heading',
		'aria-level': '3',
		'[id]': 'id',
	},
})
export class BrnAccordionTrigger {
	private readonly _accordion = inject(BrnAccordion);
	private readonly _item = inject(BrnAccordionItem);
	private readonly _elementRef = inject(ElementRef);

	public readonly state = this._item.state;
	public readonly id = `brn-accordion-trigger-${this._item.id}`;
	public readonly ariaControls = `brn-accordion-content-${this._item.id}`;

	constructor() {
		if (!this._accordion) {
			throw Error('Accordion trigger can only be used inside an Accordion. Add brnAccordion to ancestor.');
		}

		if (!this._item) {
			throw Error('Accordion trigger can only be used inside an AccordionItem. Add brnAccordionItem to parent.');
		}

		fromEvent(this._elementRef.nativeElement, 'focus')
			.pipe(takeUntilDestroyed())
			.subscribe(() => {
				this._accordion.setActiveItem(this);
			});
	}

	@HostListener('click', ['$event'])
	@HostListener('keyup.space', ['$event'])
	@HostListener('keyup.enter', ['$event'])
	protected toggle(event: Event): void {
		event.preventDefault();
		this._accordion.toggleItem(this._item.id);
	}

	public focus() {
		this._elementRef.nativeElement.focus();
	}
}

const HORIZONTAL_KEYS_TO_PREVENT_DEFAULT = [
	'ArrowLeft',
	'ArrowRight',
	'PageDown',
	'PageUp',
	'Home',
	'End',
	' ',
	'Enter',
];
const VERTICAL_KEYS_TO_PREVENT_DEFAULT = ['ArrowUp', 'ArrowDown', 'PageDown', 'PageUp', 'Home', 'End', ' ', 'Enter'];

@Directive({
	selector: '[brnAccordion]',
	host: {
		'[attr.data-state]': 'state()',
		'[attr.data-orientation]': 'orientation()',
	},
	exportAs: 'brnAccordion',
})
export class BrnAccordion implements AfterContentInit, OnDestroy {
	private readonly _el = inject(ElementRef);
	private _keyManager?: FocusKeyManager<BrnAccordionTrigger>;
	private readonly _focusMonitor = inject(FocusMonitor);

	private readonly _focused = signal<boolean>(false);
	private readonly _openItemIds = signal<number[]>([]);
	public readonly openItemIds = this._openItemIds.asReadonly();
	public readonly state = computed(() => (this._openItemIds().length > 0 ? 'open' : 'closed'));

	public triggers = contentChildren(BrnAccordionTrigger, { descendants: true });

	/**
	 * Whether the accordion is in single or multiple mode.
	 * @default 'single'
	 */
	public readonly type = input<'single' | 'multiple'>('single');
	/**
	 * The direction of the accordion, either 'ltr' (left-to-right) or 'rtl' (right-to-left).
	 * @default null
	 */
	public readonly dir = input<'ltr' | 'rtl' | null>(null);
	/**
	 * The orientation of the accordion, either 'horizontal' or 'vertical'.
	 * @default 'vertical'
	 */
	public readonly orientation = input<'horizontal' | 'vertical'>('vertical');

	public ngAfterContentInit() {
		this._keyManager = new FocusKeyManager<BrnAccordionTrigger>(this.triggers())
			.withHomeAndEnd()
			.withPageUpDown()
			.withWrap();

		if (this.orientation() === 'horizontal') {
			this._keyManager.withHorizontalOrientation(this.dir() ?? 'ltr').withVerticalOrientation(false);
		}

		this._el.nativeElement.addEventListener('keydown', (event: KeyboardEvent) => {
			const target = event.target as HTMLElement;

			if (target.tagName === 'INPUT') return;

			this._keyManager?.onKeydown(event);
			this.preventDefaultEvents(event);
		});
		this._focusMonitor.monitor(this._el, true).subscribe((origin) => this._focused.set(origin !== null));
	}

	ngOnDestroy(): void {
		this._focusMonitor.stopMonitoring(this._el);
	}

	public setActiveItem(item: BrnAccordionTrigger) {
		this._keyManager?.setActiveItem(item);
	}

	public toggleItem(id: number) {
		if (this._openItemIds().includes(id)) {
			this.closeItem(id);
			return;
		}
		this.openItem(id);
	}

	public openItem(id: number) {
		if (this.type() === 'single') {
			this._openItemIds.set([id]);
			return;
		}
		this._openItemIds.update((ids) => [...ids, id]);
	}
	public closeItem(id: number) {
		this._openItemIds.update((ids) => ids.filter((openId) => id !== openId));
	}

	private preventDefaultEvents(event: KeyboardEvent) {
		if (!this._focused()) return;
		if (!('key' in event)) return;

		const keys =
			this.orientation() === 'horizontal' ? HORIZONTAL_KEYS_TO_PREVENT_DEFAULT : VERTICAL_KEYS_TO_PREVENT_DEFAULT;
		if (keys.includes(event.key) && event.code !== 'NumpadEnter') {
			event.preventDefault();
		}
	}
}
