<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let icon = '';
	export let text = '';
	export let toggle = false;
</script>

<button
	class="nav-link btn btn-yellow link-dark text-start {toggle ? 'selected' : ''}"
	on:click={() => dispatch('select')}
	><i class={icon} id="bold_icon"></i>
	<span class="m-2"><strong>{text}</strong></span>
</button>

<style>
	.btn-yellow:focus {
		background-color: #f9e2af;
	}
	.selected {
		background-color: #f9e2af;
		outline: none;
	}
	#bold_icon {
		-webkit-text-stroke-width: 0.5px;
	}
</style>
