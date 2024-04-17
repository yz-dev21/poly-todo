<script>
	import TodoItem from './TodoItem.svelte';
	import TodoPrompt from './TodoPrompt.svelte';

	let todoList = [];

	// todo utility functions
	const createTodo = (pId, pText, pDone, pType) => {
		const newTodo = {
			id: pId,
			text: pText,
			done: pDone,
			type: pType
		};
		return newTodo;
	}

	// event handling functions
	const handleOnAdd = e => {
		let lastId = 0;
		if (todoList.length > 0) lastId = todoList[todoList.length - 1].id;

		// .push(...) returns length of array instead of new array.
		todoList.push(createTodo(lastId + 1, e.detail.value, false, []));
		// ^ due to this reason, code below is needed for reactivity.
		todoList = todoList;
	}

	const handleOnDelete = id => {
		// .filter(...) returns new array.
		todoList = todoList.filter((val) => val.id != id);
	}
</script>

<TodoPrompt on:add={handleOnAdd} />

<ul>
	{#each todoList as todo}
		<TodoItem {todo} on:delete={handleOnDelete(todo.id)} />
	{/each}
</ul>
