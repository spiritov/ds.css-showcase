<script>
	let { active = $bindable() } = $props();
	const colors = [
		'ds-slate',
		'ds-maroon',
		'ds-red',
		'ds-pink',
		'ds-orange',
		'ds-yellow',
		'ds-neonyellow',
		'ds-lime',
		'ds-green',
		'ds-teal',
		'ds-turquoise',
		'ds-blue',
		'ds-navy',
		'ds-darkpurple',
		'ds-magenta',
		'ds-fuschia'
	];
</script>

<div class="flex items-center">
	<!-- picker -->
	<div class="grid grid-cols-4 gap-4 w-fit pl-5.5 py-1.5 shrink-0">
		{#each colors as color, i (i)}
			<!-- svelte-ignore a11y_click_events_have_key_events -->
			<div
				class="size-12 border-dashed grid place-content-center cursor-pointer
      {active === color ? 'border-2' : ''}"
				style="border-color: var(--color-{color})"
				onclick={() => {
					active = color;
				}}
				role="button"
				tabindex="0"
			>
				<div class="size-8 {color}"></div>
			</div>
		{/each}
	</div>

	<!-- selected -->
	<div class="flex flex-col items-center grow gap-1 text-nowrap">
		<span class="-mt-2 mb-4 underline underline-offset-3 decoration-2">class name</span>

		<span>{active}</span>
		<div class="size-16 {active}"></div>

		<span>{active}-50</span>
		<div class="size-16 {active}-50"></div>
	</div>
</div>
