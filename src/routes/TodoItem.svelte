<script>
	import { fade } from 'svelte/transition';

	export let todo;
	export let deleteTodo;
</script>

<li transition:fade>
	<input type="checkbox" name={todo.text} bind:checked={todo.done} />
	<label for={todo.text}>{todo.text}</label>
	<button on:click={() => deleteTodo(todo)}>X</button>
</li>

<!-- ❌ -->
