<script>
	import TodoItem from './TodoItem.svelte';
	import TodoPrompt from './TodoPrompt.svelte';

	// let todoList = [];
	let todoList = [
		{
			id: 1,
			text: 'Todo #1',
			done: false
		},
		{
			id: 2,
			text: 'Todo #2',
			done: true
		}
	];

	function deleteTodo(todo) {
		let targetArr = todoList.filter((val) => val.id != todo.id);
		todoList = targetArr;
	}
</script>

<div class="grid">
	<div>
		<TodoPrompt bind:todoList />
	</div>
	<div>
		<ul>
			{#each todoList as todo}
				<TodoItem {todo} {deleteTodo} />
			{/each}
		</ul>
	</div>
</div>
