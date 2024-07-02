<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let text = '';
	export let toggle = false;
</script>

<li class="nav-item mb-3">
	<div class="row">
		<div class="col">
			<button
				class="nav-link btn btn-primary link-light text-start {toggle ? 'selected' : ''}"
				on:click={() => dispatch('select')}
				>{text}
			</button>
		</div>
	</div>
</li>

<style>
	.btn-primary:hover {
		color: white !important;
	}
	.selected {
		color: white !important;
		background-color: var(--bs-primary);
		outline: none;
	}
</style>
