<script>
	// import { slide } from 'svelte/transition';

	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let todo;
</script>

<!-- <li transition:slide class="list-group-item border-0 d-flex align-items-center ps-0"> -->
<li class="list-group-item border-0 d-flex align-items-center ps-0">
	<input type="checkbox" class="form-check-input me-3" name={todo.text} bind:checked={todo.done} />
	<span>{todo.text}</span>
	<button class="btn-close shadow-none" on:click={() => dispatch('delete')}></button>
</li>

<!-- ❌ -->

<style>
</style>