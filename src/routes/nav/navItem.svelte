<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let icon = '';
	export let text = '';
	export let toggle = false;
</script>

<button
	class="nav-link btn btn-primary link-dark text-start {toggle ? 'selected' : ''}"
	on:click={() => dispatch('select')}
	><i class={icon} id="bold_icon"></i>
	<span class="m-2"><strong>{text}</strong></span>
</button>

<style>
	.btn-primary:hover {
		color: white !important;
	}
	.selected {
		color: white !important;
		background-color: #106cfc;
		outline: none;
	}
	:global(#bold_icon) {
		-webkit-text-stroke-width: 0.5px;
	}
</style>
