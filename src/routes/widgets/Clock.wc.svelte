<svelte:options
	customElement={{
		tag: 'ds-clock',
		shadow: 'none',
		props: { hideBorder: { attribute: 'hide-border', type: 'String', reflect: false } }
	}}
/>

<script>
	import { SvelteDate } from "svelte/reactivity";
  import './clock.css';

  const date = new SvelteDate();

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

<div
	class="relative size-[194px] border-2 border-black bg-white/50"
	style:box-shadow={showBorder ? "0px 0px 0px 2px #d3d3d3,0px 0px 0px 4px #e3e3e3" : ""}
>
	<!-- center dot, hands -->
	<div class="absolute top-0 left-0 z-10 grid size-full place-content-center">
		<div class="relative flex size-[10px] items-end justify-center bg-(--color-ds-clock-center)">
			<div
				class="absolute bottom-[2px] -z-10 ml-[6px] h-[48px] w-[4px] origin-bottom bg-(--color-ds-clock-dot)"
				style:rotate={`${((date.getHours() % 12) / 12) + ((1 / 12) *  (date.getMinutes() / 60))}turn`}
			></div>
			<div
				class="absolute bottom-[2px] -z-10 ml-[6px] h-[64px] w-[4px] origin-bottom bg-(--color-ds-clock-dot)"
				style:rotate={`${date.getMinutes() / 60}turn`}
			></div>
			<div
				class="absolute bottom-[2px] -z-10 ml-[6px] h-[72px] w-[4px] origin-bottom bg-(--color)"
				style:rotate={`${seconds / 60}turn`}
			></div>
		</div>
	</div>
	<!-- clock numbers -->
	<div
		class="absolute top-0 left-[4px] flex size-full flex-col items-center justify-between text-[40px] leading-none tracking-tighter text-(--color-ds-clock-text)" style:font-family="var(--font-clock)"
	>
		<span class="pt-[10px]">12</span>
		<div class="flex w-full justify-between px-[2px]">
			<span>9</span>
			<span class="pr-[4px]">3</span>
		</div>
		<span class="pb-[2px]">6</span>
	</div>
	<!-- clock number dots -->
	<div class="absolute flex size-full flex-col items-center">
		<div class="flex h-1/5 w-1/2 items-center justify-between">
			{@render dotPair()}
		</div>
		<div class="flex h-1/5 w-5/6 items-center justify-between">
			{@render dotPair()}
		</div>
		<hr class="h-1/4 border-none" />
		<div class="flex h-1/5 w-5/6 items-center justify-between">
			{@render dotPair()}
		</div>
		<div class="flex h-1/5 w-1/2 items-center justify-between">
			{@render dotPair()}
		</div>
	</div>
</div>

{#snippet dotPair()}
	<span class="size-[8px] bg-(--color-ds-clock-dot)"></span>
	<span class="size-[8px] bg-(--color-ds-clock-dot)"></span>
{/snippet}

<style>

	:host {
		/* slate default */
		--color: #61829a;
	}

  :root {
    --color: #61829a;

    --color-ds-clock-center: #494949;
    --color-ds-clock-dot: #797979;
    --color-ds-clock-text: #b2b2b2;
  }
</style>