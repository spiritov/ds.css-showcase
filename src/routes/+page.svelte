<script>
	import dscsspictochat from '$lib/assets/ds-css.png';
	import { snippets } from '$lib/snippets.svelte';

	import githubDark from 'svelte-highlight/styles/github-dark';

	import { onMount } from 'svelte';
	import Colors from '$lib/components/Colors.svelte';
	import DSComponent from '$lib/components/DSComponent.svelte';
	import CodeSnippet from '$lib/components/CodeSnippet.svelte';
	// import Calendar from './widgets/Calendar.wc.svelte';
	// import Clock from './widgets/Clock.wc.svelte';
	onMount(async () => {
		await import('@spiritov/ds.css/dist/widgets/ds-calendar.js');
		await import('@spiritov/ds.css/dist/widgets/ds-clock.js');
	});

	let active = $state('ds-slate');

	// update active color for snippets
	$effect(() => {
		for (const [k, v] of Object.entries(snippets)) {
			snippets[k] = v.replaceAll('ds-color', active);
		}
	});
</script>

<svelte:head>
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html githubDark}
</svelte:head>

<!-- svelte-ignore a11y_consider_explicit_label -->

<div class="flex gap-7 mt-5 mr-5 overflow-auto">
	<!-- sidebar -->
	<nav class="flex flex-col gap-3 ml-7 mt-2 fixed">
		{@render NavItem('', 'ds-pink', 'Intro')}
		{@render NavItem('#colors', `${active}`, 'Colors')}
		{@render NavItem('#grid-sizing', 'ds-slate', 'Grid Sizing')}
		<div>
			<span>Components</span>
			<div class="ml-4 flex flex-col gap-3">
				{@render NavItem('#accordion', 'ds-red', 'Accordion')}
				{@render NavItem('#alert', 'ds-orange', 'Alert')}
				{@render NavItem('#bars', 'ds-slate', 'Bars')}
				{@render NavItem('#buttons', 'ds-blue', 'Buttons')}
				{@render NavItem('#radio-buttons', 'ds-blue', 'Radio Buttons')}
				{@render NavItem('#radio-buttons', 'ds-slate', 'Grids')}
				{@render NavItem('#radio-buttons', 'ds-slate', 'Info Header')}
				{@render NavItem('#input', 'ds-orange', 'Input')}
				{@render NavItem('#pictochat', 'ds-turquoise', 'Pictochat')}
			</div>
		</div>
		<div>
			<span>Web Components</span>
			<div class="ml-4 flex flex-col gap-3">
				{@render NavItem('#clock', 'ds-magenta', 'Calendar')}
				{@render NavItem('#clock', 'ds-magenta', 'Clock')}
			</div>
		</div>
	</nav>
	<!-- content -->
	<main class="pictochat-window w-full relative ml-56">
		<!-- clock / calendar -->
		<div class="absolute right-0 top-0 flex gap-2 xl:visible invisible">
			<div class="ds-grid size-fit">
				<ds-clock hide-border=""></ds-clock>
			</div>
			<ds-calendar hide-border=""></ds-calendar>
		</div>

		<!-- intro -->
		<div
			id="intro"
			class="pictochat-message h-[140px]"
			style:background-image={`url(${dscsspictochat})`}
		>
			<header class="ds-magenta-50">spiritov</header>
		</div>
		{@render PictoHeader(
			'',
			"ds.css is a css framework and love letter to the DS / DS Lite's firmware.",
			true
		)}
		<div class="pictochat-message">
			<header class="ds-blue-50">Installation</header>
			<span
				>Please see the <a href="https://github.com/spiritov/ds.css#dscss" target="_blank"
					>GitHub's readme</a
				> to get started!</span
			>
		</div>
		<div class="pictochat-message">
			<span
				>ds.css uses a mix of semantic html and class names for its styling. For example, a button
				can be created with <strong>&#x3C;button&#x3E;</strong>, but a wider button needs
				<strong>class='button-lg'</strong> applied.</span
			>
			<div class="pictochat-message ds-grid relative h-[140px]">
				<header class="ds-orange-50">Buttons</header>
				<div class="absolute left-29.75 top-7 flex flex-col gap-2">
					<button></button>
					<button class="button-lg"></button>
				</div>
			</div>
		</div>

		<!-- colors -->
		{@render PictoHeader('colors', 'Colors')}
		<div class="flex flex-col ml-8 gap-1">
			<div class="pictochat-message">
				<span
					>16 theme colors are available for coloring some components with class names. You can
					click on the colors below to preview how components on this page will look with them.</span
				>
				<div class="pictochat-message">
					<header class="ds-teal-50">Note</header>
					<span
						>For other uses, their respective css variables are available, too.
						<br />
						(--color-{active})</span
					>
				</div>
				<Colors bind:active />
			</div>
		</div>

		<!-- grid sizing -->
		{@render PictoHeader('grid-sizing', 'Grid Sizing')}
		<div class="flex flex-col ml-8 gap-1">
			<span class="pictochat-message">
				2 css variables are available to help set grid sizes and to align components in them.
			</span>
			<DSComponent>
				<div
					class="ds-grid"
					style:width="calc(var(--ds-grid-gap) * 12)"
					style:height="calc(var(--ds-grid-gap) * 3)"
				>
					<button
						class="relative"
						style:left="calc(var(--ds-grid-gap) * 2 - 2px)"
						style:top="calc(var(--ds-grid-gap) - 2px)">Button</button
					>
				</div>
			</DSComponent>
			<CodeSnippet code={snippets.gridSizing} />
			<DSComponent>
				<div
					class="ds-grid-lg"
					style:width="calc(var(--ds-grid-gap-lg) * 4)"
					style:height="calc(var(--ds-grid-gap-lg) * 2)"
				>
					<button
						class="relative"
						style:left="calc((var(--ds-grid-gap) * 0.5) + var(--ds-grid-gap))"
						style:top="calc(var(--ds-grid-gap) * 1.5)">Button</button
					>
				</div>
			</DSComponent>
			<CodeSnippet code={snippets.gridSizingLarge} />
		</div>

		<!-- accordion -->
		{@render PictoHeader('accordion', 'Accordion')}
		<div class="flex flex-col ml-8 gap-1">
			<span class="pictochat-message">Accordion headers can be colored.</span>
			<DSComponent>
				<details>
					<summary class={active}>End Credits</summary>
					<p>
						So let's run<br />
						Make a great escape<br />
						And I'll be waiting outside for the getaway
					</p>
				</details>
			</DSComponent>
			<CodeSnippet code={snippets.accordion} />
		</div>

		<!-- alert -->
		{@render PictoHeader('alert', 'Alert')}
		<div class="flex flex-col ml-8 gap-1">
			<span class="pictochat-message"
				>Alerts can be paired with a loading animation (which could also be used on its own)!</span
			>
			<DSComponent>
				<div class="alert">
					<div class="loading-container">
						<div class="loading-1"></div>
						<div class="loading-2"></div>
						<div class="loading-3"></div>
						<div class="loading-4"></div>
						<div class="loading-5"></div>
						<div class="loading-6"></div>
						<div class="loading-7"></div>
						<div class="loading-8"></div>
						<div class="loading-9"></div>
					</div>
					<span>Looking for software available for download...</span>
					<div class="loading-container">
						<div class="loading-1"></div>
						<div class="loading-2"></div>
						<div class="loading-3"></div>
						<div class="loading-4"></div>
						<div class="loading-5"></div>
						<div class="loading-6"></div>
						<div class="loading-7"></div>
						<div class="loading-8"></div>
						<div class="loading-9"></div>
					</div>
				</div>
			</DSComponent>
			<CodeSnippet code={snippets.alert} />
		</div>

		<!-- bars -->
		{@render PictoHeader('bars', 'Bars')}
		<div class="flex flex-col ml-8 gap-1">
			<span class="pictochat-message">Bars should be given a width.</span>
			<DSComponent>
				<div class="bar w-sm {active}"></div>
				<div class="bar-lg w-sm {active}"></div>
				<div class="bar-lg-reverse w-sm {active}"></div>
			</DSComponent>
			<CodeSnippet code={snippets.bars} />
		</div>

		<!-- buttons -->
		{@render PictoHeader('buttons', 'Buttons')}
		<div class="flex flex-col ml-8 gap-1">
			<span class="pictochat-message">Buttons have 3 widths.</span>
			<DSComponent>
				<button class={active}></button>
				<button class="button-lg {active}"></button>
				<button class="button-square {active}">X</button>
			</DSComponent>
			<CodeSnippet code={snippets.buttons} />
		</div>

		<!-- radio buttons -->
		{@render PictoHeader('radio-buttons', 'Radio Buttons')}
		<div class="flex flex-col ml-8 gap-1">
			<div class="pictochat-message">
				<span
					>Radio buttons require a color on each <strong>&#x3C;input&#x3E;</strong> to appear selected.</span
				>
				<div class="pictochat-message">
					<header class="ds-teal-50">Note</header>
					<span
						>Bring your own container for the <strong>&#x3C;fieldset&#x3E;</strong>! This example
						uses a grid for its layout.</span
					>
				</div>
			</div>
			<DSComponent>
				<fieldset class="grid grid-cols-2 gap-4">
					<legend>Select an option</legend>
					<div class="radio-button">
						<input id="radio1" type="radio" name="option" class={active} />
						<label for="radio1">Piece of Cipher</label>
					</div>
					<div class="radio-button">
						<input id="radio2" type="radio" name="option" class={active} />
						<label for="radio2">Chaining Intention</label>
					</div>
					<div class="radio-button">
						<input id="radio3" type="radio" name="option" class={active} />
						<label for="radio3">0259 in my room</label>
					</div>
					<div class="radio-button">
						<input id="radio4" type="radio" name="option" class={active} />
						<label for="radio4">Fantasia Nr.2</label>
					</div>
				</fieldset>
			</DSComponent>
			<CodeSnippet code={snippets.radioButtons} />
		</div>

		<!-- grids -->
		{@render PictoHeader('grids', 'Grids')}
		<div class="flex flex-col ml-8 gap-1">
			<span class="pictochat-message"
				>Grids should be given a width and height (if they have nothing in them).</span
			>
			<DSComponent>
				<div
					class="ds-grid"
					style:width="calc(var(--ds-grid-gap) * 12)"
					style:height="calc(var(--ds-grid-gap) * 6)"
				></div>
			</DSComponent>
			<CodeSnippet code={snippets.grid} />
			<DSComponent>
				<div
					class="ds-grid-lg"
					style:width="calc(var(--ds-grid-gap-lg) * 4)"
					style:height="calc(var(--ds-grid-gap-lg) * 2)"
				></div>
			</DSComponent>
			<CodeSnippet code={snippets.gridLarge} />
		</div>

		<!-- info header -->
		{@render PictoHeader('info-box', 'Info Box')}
		<div class="flex flex-col ml-8 gap-1">
			<DSComponent>
				<div class="info">
					<div class="info-square">image</div>
					<div class="info-container">
						<div class="info-label">Settings</div>
						<div class="info-text">
							Change system settings here. Select the setting you'd like to change.
						</div>
					</div>
				</div>
			</DSComponent>
			<CodeSnippet code={snippets.info} />
		</div>

		<!-- input -->
		{@render PictoHeader('input', 'Input')}
		<div class="flex flex-col ml-8 gap-1">
			<span class="pictochat-message">Bumpers are available to go before or after inputs.</span>
			<DSComponent>
				<label>
					<span>label</span>
					<div class="input-wrapper">
						<div class="input-before"></div>
						<input type="text" />
						<div class="input-after"></div>
					</div>
				</label>

				<label>
					<span>another label</span>
					<div class="input-wrapper">
						<input type="text" class="input-lg" />
					</div>
				</label>
			</DSComponent>
			<CodeSnippet code={snippets.inputs} />
		</div>

		<!-- pictochat -->
		{@render PictoHeader('pictochat', 'Pictochat')}
		<div class="flex flex-col ml-8 gap-1">
			<div class="pictochat-message">
				<span>2 highlight classes are available to highlight text.</span>
				<div class="pictochat-message">
					<header class="ds-teal-50">Note</header>
					<span>{active}-50 versions of colors may fit better with pictochat headers.</span>
				</div>
			</div>
			<DSComponent>
				<div class="pictochat-window">
					<div class="pictochat-message pictochat-enter-highlight">Now joining..</div>
					<div class="pictochat-message">
						<header class="{active}-50">satellites</header>
						<span
							>cause the feelings come and go like flashing lights, but you never leave my satellite</span
						>
					</div>
					<div class="pictochat-status pictochat-exit-highlight">Now leaving..</div>
				</div>
			</DSComponent>
			<CodeSnippet code={snippets.pictochat} />
		</div>

		<!-- calendar -->
		{@render PictoHeader('calendar', 'Calendar')}
		<div class="flex flex-col ml-8 gap-1">
			<div class="pictochat-message">
				<span>The calendar is imported separately as a JavaScript module.</span>
				<div class="pictochat-message">
					<header class="ds-teal-50">Note</header>
					<span
						>The calendar can be colored with a <strong>style</strong> attribute, and can have its
						outline hidden with <strong>border-hidden</strong>.</span
					>
				</div>
			</div>
			<DSComponent>
				<div class="flex gap-4">
					<ds-calendar></ds-calendar>
					<ds-calendar style="--color: var(--color-{active})" hide-border=""></ds-calendar>
				</div>
			</DSComponent>
			<CodeSnippet code={snippets.calendar} />
		</div>

		<!-- clock -->
		{@render PictoHeader('clock', 'Clock')}
		<div class="flex flex-col ml-8 gap-1">
			<div class="pictochat-message">
				<span>The clock is imported separately as a JavaScript module.</span>
				<div class="pictochat-message">
					<header class="ds-teal-50">Note</header>
					<span
						>The clock can be colored with a <strong>style</strong> attribute, and can have its
						outline hidden with <strong>border-hidden</strong>.</span
					>
				</div>
			</div>
			<DSComponent>
				<div class="flex gap-4">
					<ds-clock></ds-clock>
					<div class="ds-grid" style="width: fit-content">
						<ds-clock style="--color: var(--color-{active})" hide-border=""></ds-clock>
					</div>
				</div>
			</DSComponent>
			<CodeSnippet code={snippets.clock} />
		</div>
	</main>
</div>

{#snippet NavItem(href, color, label)}
	<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
	<a {href} draggable="false">
		<button class={color}>{label}</button>
	</a>
{/snippet}

{#snippet PictoHeader(id, label, intro = false)}
	<span {id} class="pictochat-status pictochat-exit-highlight {intro ? '' : 'mt-4'}">
		{label}
	</span>
{/snippet}
