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
	function addTodo(e) {
		let lastId = 0;
		if (todoList.length > 0) lastId = todoList[todoList.length - 1].id;

		const newTodo = {
			id: lastId + 1,
			text: e.detail.value,
			done: false
		};

		todoList.push(newTodo);
		todoList = todoList; // For reactivity - updates UI on submit.
	}
	function deleteTodo(id) {
		todoList = todoList.filter((val) => val.id != id);
	}
</script>

<div class="grid">
	<div>
		<TodoPrompt on:addTodo={addTodo} />
	</div>
	<div>
		<ul>
			{#each todoList as todo}
				<TodoItem {todo} on:deleteTodo={deleteTodo(todo.id)} />
			{/each}
		</ul>
	</div>
</div>
