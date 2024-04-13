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

		// .push(...) returns length of array instead of new array.
		todoList.push(newTodo);
		// ^ due to this reason, code below is needed for reactivity.
		todoList = todoList;
	}
	function deleteTodo(id) {
		// .filer(...) returns new array.
		todoList = todoList.filter((val) => val.id != id);
	}
</script>

<TodoPrompt on:addTodo={addTodo} />

<ul>
	{#each todoList as todo}
		<TodoItem {todo} on:deleteTodo={deleteTodo(todo.id)} />
	{/each}
</ul>
