<script>
	import { fade } from 'svelte/transition';

	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let todo;
</script>

<li transition:fade class="list-group-item border-0 d-flex align-items-center ps-0">
	<input type="checkbox" class="form-check-input me-3" name={todo.text} bind:checked={todo.done} />
	<label for={todo.id}>{todo.text}</label>
	<button class="btn-close" on:click={() => dispatch('deleteTodo')}></button>
</li>

<!-- ❌ -->
