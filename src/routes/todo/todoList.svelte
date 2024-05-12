<script>
	import TodoPrompt from './todoPrompt.svelte';
	import TodoItem from './todoItem.svelte';

	const createTodo = (pId, pText, pDone) => ({
		id: pId,
		text: pText,
		done: pDone
	});

	let todoList = [];

	let todoPromptData = {
		header: '',
		show: false,
		isAdd: true
	};
	let targetTodo = {};

	function handleOnSubmit(e) {
		if (e.detail.isAdd) {
			let lastId = 0;
			if (todoList.length > 0) lastId = todoList[todoList.length - 1].id;

			todoList.push(createTodo(lastId + 1, e.detail.text, e.detail.done));
		}

		todoList = todoList;
	}
	const handleOnEdit = (todo) => {
		handlePrompt(false);

		todoPromptData.todo = todo;
	};
	function handlePrompt(isAdd) {
		todoPromptData.show = true;
		todoPromptData.isAdd = isAdd;

		if (todoPromptData.isAdd) todoPromptData.header = 'Add todo';
		else todoPromptData.header = 'Edit todo';
	}
</script>

<div class="row">
	<div class="col">
		<ul class="list-group-flush">
			{#each todoList as todo}
				<TodoItem {todo} on:edit={() => handleOnEdit(todo)} />
			{/each}

			<button class="btn btn-primary" on:click={() => handlePrompt(true)}>
				<i class="bi bi-plus-lg"></i> Add todo
			</button>
		</ul>
	</div>
	<div class="col-md-4">
		<TodoPrompt {todoPromptData} {targetTodo} on:submit={(e) => handleOnSubmit(e)} />
	</div>
</div>
