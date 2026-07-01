<script>
	import { Highlight, CopyButton } from 'svelte-highlight';
	import language from 'svelte-highlight/languages/html';

	let { code } = $props();

	let show = $state(false);
</script>

<button
	class="button-lg -mb-2 {show ? '' : 'bg-ds-theme-teal'}"
	onclick={() => {
		show = !show;
	}}>{!show ? 'show' : 'hide'} code</button
>

{#if show}
	<div class="relative w-xl">
		<Highlight {language} {code} />
		<CopyButton
			{code}
			--copy-background="rgba(255, 255, 255, 0.1)"
			--copy-color="#fff"
			--copy-border-radius="8px"
		/>
	</div>
{/if}
