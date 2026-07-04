<svelte:options
	customElement={{
		tag: 'ds-calendar',
		shadow: 'none',
		props: { hideBorder: { attribute: 'hide-border', type: 'String', reflect: true } }
	}}
/>

<script>
	import current_day from './png/current_day.png';
	import current_day_border from './png/current_day_border.png';
	import { SvelteDate } from 'svelte/reactivity';
	import './calendar.css';

	const date = new SvelteDate();
	const firstDayOfWeek = $derived(new Date(new Date(date.getFullYear(), date.getMonth())).getDay()); // 0 indexed
	const daysInMonth = $derived(new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate());
	const daysInCalendar = $derived(daysInMonth + firstDayOfWeek);
	const calendarWeeks = $derived(daysInCalendar > 35 ? 6 : daysInCalendar > 28 ? 5 : 4);

	// counts to 60, then updates date and resets
	// this way, date isn't being assigned every second
	let seconds = $state(date.getSeconds());

	$effect(() => {
		const interval = setInterval(() => {
			seconds += 1;
			if (seconds >= 60) {
				date.setTime(Date.now());
				seconds = date.getSeconds();
			}
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});

	// bad naming.. if the attribute exists empty, hide the border
	let { hideBorder = 'truthy' } = $props();
	let showBorder = $state(hideBorder);
</script>

<!-- h-[228px] for 5 rows -->
<div class="flex flex-col w-[234px] min-h-[198px] items-center">
	<!-- header -->
	<!-- 17.4px looks sharpest on firefox -->
	<div
		class="h-[32px] relative z-10 bg-white text-center tracking-[4px] text-[17.4px]
    {showBorder ? 'border-(--color-ds-grid-border) border-2 w-[226px]' : 'w-[222px]'}"
	>
		<span>{(date.getMonth() + 1).toString().padStart(2, '0')}/{date.getFullYear()}</span>
	</div>
	<!-- calendar -->

	<div
		class="border-2"
		style:box-shadow={showBorder ? '0px 0px 0px 2px #d3d3d3,0px 0px 0px 4px #e3e3e3' : 'none'}
	>
		<!-- day of week headers -->
		<div class="grid grid-cols-7 border-b-2 gap-0.5 bg-black">
			{@render dayOfWeekHeader('Su')}
			{@render dayOfWeekHeader('Mo')}
			{@render dayOfWeekHeader('Tu')}
			{@render dayOfWeekHeader('We')}
			{@render dayOfWeekHeader('Th')}
			{@render dayOfWeekHeader('Fr')}
			{@render dayOfWeekHeader('Sa')}
		</div>
		<!-- calendar days -->
		<!-- font 14.5px looks sharpest on firefox -->
		<div
			class="grid grid-cols-7 bg-(--color-ds-calendar-border-grey) gap-0.5 text-[14.5px] tracking-[1px]"
		>
			{#each { length: calendarWeeks * 7 }, i}
				<!-- 0 indexed-->
				{@const day = i - firstDayOfWeek}
				<div
					class="relative size-[30px] text-center {i % 7 === 0
						? 'bg-(--color-ds-calendar-bg-sunday) text-(--color-ds-calendar-text-sunday)'
						: i % 7 === 6
							? 'bg-(--color-ds-calendar-bg-saturday) text-(--color-ds-calendar-text-saturday)'
							: 'bg-white text-black'}"
				>
					{#if date.getDate() === day + 1}
						<div class="absolute grid size-full place-items-center">
							<!-- use --color var -->
							<div
								class="relative size-[22px] z-10 bg-(--color) bg-blend-hard-light"
								style:background-image="url({current_day})"
								style:image-rendering="pixelated"
							></div>
							<!-- use --color var -->
							<div
								class="absolute size-[26px] bg-(--color) opacity-75 bg-blend-hard-light"
								style:background-image="url({current_day_border})"
								style:image-rendering="pixelated"
							></div>
						</div>
					{/if}
					<span class="left-px top-px relative z-10">
						{day >= 0 && day < daysInMonth ? day + 1 : ''}
					</span>
				</div>
			{/each}
		</div>
	</div>
</div>

{#snippet dayOfWeekHeader(day)}
	<!-- font 14.5px looks sharpest on firefox -->
	<div
		class="border-black h-[30px] text-white text-center align-middle text-[14.5px] tracking-[1px] bg-(--color-ds-calendar-bg-header) text-sm first:bg-(--color-ds-calendar-header-bg-sunday) last:bg-(--color-ds-calendar-header-bg-saturday)"
	>
		<span class="relative top-[3px] left-0.5">{day}</span>
	</div>
{/snippet}

<style>
	:host {
		/* slate default */
		--color: #61829a;
	}

	:root {
		--color-ds-calendar-bg-header: #696969;
		--color-ds-calendar-header-bg-sunday: #d30000;
		--color-ds-calendar-header-bg-saturday: #0041c3;
		--color-ds-calendar-bg-sunday: #fba2eb;
		--color-ds-calendar-bg-saturday: #82aafb;
		--color-ds-calendar-text-sunday: #790000;
		--color-ds-calendar-text-saturday: #000082;
		--color-ds-calendar-border-grey: #929292;
	}
</style>
