<script>
	import TodoPrompt from './todoPrompt.svelte';
	import TodoItem from './todoItem.svelte';

	/* GET TODOLIST */
	let todoList = [];
	let localTodoList = localStorage.getItem('todolist');

	if (!localTodoList) {
		localStorage.setItem('todolist', '[]');
	} else {
		todoList = JSON.parse(localTodoList);
	}
	

	/* GET POLYLIST */
	let polyList = [];
	let localPolyList = localStorage.getItem('polylist');

	if (!localPolyList) {
		localStorage.setItem('polylist', '[]');
	}
	
	polyList = JSON.parse(localPolyList);

	
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
		localStorage.setItem('todolist', JSON.stringify(todoList));
	}

	const handleOnDelete = (id) => {
		todoList = todoList.filter((val) => val.id != id);
		localStorage.setItem('todolist', JSON.stringify(todoList));
	};

</script>

<div class="row">
	<div class="col-md-5">
		<TodoPrompt on:add={(e) => handleOnAdd(e)} />
	</div>
	<div class="col">
		<ul>
			{#each todoList as todo}
				<TodoItem {todo} on:delete={() => handleOnDelete(todo.id)} />
			{/each}
		</ul>
	</div>
</div>
