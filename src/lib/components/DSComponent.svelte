<script>
	let { children } = $props();
</script>

<div class="ds-grid-lg dsc bg-top">
	<div class="bg-black/40 grid place-content-center p-8 gap-1 -m-4">
		{@render children()}
	</div>
</div>

<style>
	.dsc {
		border-style: solid;
		border-width: 8px;
		background-color: black;
		padding-inline: 4px;
		min-width: 468px;
		max-width: fit-content;

		border-image: url('/src/routes/assets/svg/pictochat_status.svg') 8;

		clip-path: polygon(
			/* bottom left */ 8px 100%,
			8px calc(100% - 2px),
			6px calc(100% - 2px),
			6px calc(100% - 4px),
			4px calc(100% - 4px),
			4px calc(100% - 6px),
			2px calc(100% - 6px),
			2px calc(100% - 8px),
			0 calc(100% - 8px),
			/* top left */ 0 8px,
			2px 8px,
			2px 6px,
			4px 6px,
			4px 4px,
			6px 4px,
			6px 2px,
			8px 2px,
			8px 0px,
			/* top right */ calc(100% - 8px) 0,
			calc(100% - 8px) 2px,
			calc(100% - 6px) 2px,
			calc(100% - 6px) 4px,
			calc(100% - 4px) 4px,
			calc(100% - 4px) 6px,
			calc(100% - 2px) 6px,
			calc(100% - 2px) 8px,
			100% 8px,
			/* bottom left */ 100% calc(100% - 8px),
			calc(100% - 2px) calc(100% - 8px),
			calc(100% - 2px) calc(100% - 6px),
			calc(100% - 4px) calc(100% - 6px),
			calc(100% - 4px) calc(100% - 4px),
			calc(100% - 6px) calc(100% - 4px),
			calc(100% - 6px) calc(100% - 2px),
			calc(100% - 8px) calc(100% - 2px),
			calc(100% - 8px) 100%
		);
	}
</style>
