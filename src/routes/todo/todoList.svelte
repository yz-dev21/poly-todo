<script>
	import TodoItem from './todoItem.svelte';
	import TodoPrompt from './todoPrompt.svelte';
	import * as data from './data.js';
	import Modal from 'sv-bootstrap-modal';

	let todoList = data.getTodoList();
	let polyList = data.getPolyList();

	let isOpen = false;

	function handleOnAdd(e) {
		isOpen = false;

		let lastId = 0;
		if (todoList.length > 0) lastId = todoList[todoList.length - 1].id;

		let newTodo = e.detail.value;
		newTodo.id = lastId + 1;

		todoList.push(newTodo);

		todoList = todoList;
		data.setTodoList(todoList);
	}
</script>

<Modal backdrop={false} bind:open={isOpen}>
	<div class="modal-header">
		<h5 class="modal-title">Add a new todo</h5>
		<button type="button" class="btn-close" on:click={() => (isOpen = false)}> </button>
	</div>
	<TodoPrompt on:submit={(e) => handleOnAdd(e)} />
</Modal>

<div class="row">
	<div class="col">
		<ul class="list-group-flush">
			<button class="btn btn-primary mb-3" on:click={() => (isOpen = true)}>
				<i class="bi bi-plus-lg"></i> Add todo
			</button>
			{#each todoList as todo}
				<TodoItem bind:todo />
			{/each}
		</ul>
	</div>
</div>

<style>
</style>
