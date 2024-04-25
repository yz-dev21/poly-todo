<script>
	import TodoPrompt from './todoPrompt.svelte';
	import TodoItem from './todoItem.svelte';

	let todoList = [];

	const createTodo = (pId, pText, pDone) => ({
		id: pId,
		text: pText,
		done: pDone
	});
	function handleOnAdd(e) {
		let lastId = 0;
		if (todoList.length > 0) lastId = todoList[todoList.length - 1].id;

		todoList.push(createTodo(lastId + 1, e.detail.value, false));
		todoList = todoList;
	}

	const handleOnDelete = (id) => {
		todoList = todoList.filter((val) => val.id != id);
	};
</script>

<TodoPrompt on:add={(e) => handleOnAdd(e)} />

<ul>
	{#each todoList as todo}
		<TodoItem {todo} on:delete={() => handleOnDelete(todo.id)} />
	{/each}
</ul>
