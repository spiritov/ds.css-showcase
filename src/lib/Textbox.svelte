<script>
	let { children, bgimage = null } = $props();
</script>

{#if !bgimage}
	<div class="pictochat-message">
		{@render children()}
	</div>
{:else}
	<div class="pictochat-message h-[140px]" style:background-image={`url(${bgimage})`}>
		{@render children()}
	</div>
{/if}
