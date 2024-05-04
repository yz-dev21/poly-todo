<script>
	// import { slide } from 'svelte/transition';

	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let poly;
</script>

<!-- <li
	transition:slide={{ duration: 250 }}
	class="list-group-item border-0 d-flex align-items-center ps-0"
> -->
<li	class="list-group-item border-0 d-flex align-items-center ps-0">
	<!-- <input type="checkbox" class="form-check-input me-3" name={todo.text} bind:checked={todo.done} /> -->
	<span>{poly.name}</span>
	<button class="btn-close shadow-none" on:click={() => dispatch('deletePoly')}></button>
</li>

<style>
</style>
