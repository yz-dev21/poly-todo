<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let icon = '';
	export let toggle = false;
</script>

<li class="nav-item mb-3">
	<button
		class="nav-link btn btn-primary link-light fs-4 {toggle ? 'selected' : ''}"
		on:click={() => dispatch('select')}
		><i class={icon}></i>
	</button>
</li>

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
