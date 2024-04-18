<script>
	import PolyPrompt from './polyPrompt.svelte';
	import TodoPrompt from './TodoPrompt.svelte';
	import TodoItem from './todoItem.svelte';

	let polyList = [];
	let todoList = [];

	const createTodo = (pId, pText, pDone, pPoly) => ({
		id: pId,
		text: pText,
		done: pDone,
		type: pPoly
	});
	function handleOnAddPoly(e) {
		console.log(e);
	}
	function handleOnAdd(e) {
		let lastId = 0;
		if (todoList.length > 0) lastId = todoList[todoList.length - 1].id;

		todoList.push(createTodo(lastId + 1, e.detail.value, false, []));
		todoList = todoList;
	}

	const handleOnDelete = (id) => {
		todoList = todoList.filter((val) => val.id != id);
	};
</script>

<PolyPrompt on:addPoly={handleOnAddPoly} />
<TodoPrompt on:add={handleOnAdd} />

<ul>
	{#each todoList as todo}
		<TodoItem {todo} on:delete={handleOnDelete(todo.id)} />
	{/each}
</ul>
