<script>
	import { fade } from 'svelte/transition';

	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let todo;
</script>

<li transition:fade>
	<input type="checkbox" name={todo.text} bind:checked={todo.done} />
	<label for={todo.text}>{todo.text}</label>
	<button on:click={() => dispatch('deleteTodo')}>X</button>
</li>

<!-- ❌ -->
