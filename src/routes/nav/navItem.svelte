<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let icon = '';
	export let toggle = false;
</script>

<button
	class="nav-link btn btn-primary link-light text-start {toggle ? 'selected' : ''}"
	on:click={() => dispatch('select')}
	><i class={icon} id="bold_icon"></i>
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
</style>
