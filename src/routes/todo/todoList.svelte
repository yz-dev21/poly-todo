<script>
	import TodoItem from './todoItem.svelte';
	import TodoModal from './todoModal.svelte';
	import AddTodo from './addTodo.svelte';
	import * as ls from '../../ls.js';

	const addTodoModalId = 'addTodoModal';

	let todoList = ls.getTodoList();

	let highestId = 0;

	let unorderedList = [];

	function handleOnAdd(e) {
		let lastId = 0;
		if (todoList.length > 0) lastId = todoList[todoList.length - 1].id;
		if (highestId <= lastId) highestId = lastId;

		todoList.push({
			id: highestId + 1,
			text: e.detail.value,
			done: false,
			categoryList: []
		});

		todoList = todoList;
		ls.setTodoList(todoList);
	}
	const handleOnChange = (id) => {
		if (id == -1) {
			todoList = todoList.filter((t) => t.id != id);
		}
		ls.setTodoList(todoList);
	};
	const updateUnordered = () => {
		unorderedList = todoList.filter((t) => t.categoryList.length == 0);
	};
	$: todoList, updateUnordered();
</script>

<TodoModal id={addTodoModalId} title="Add a new todo" on:submit={(e) => handleOnAdd(e)} />
<div class="row text-center mb-4">
	<span class="h4 title">TodoList</span>
</div>
<div class="row d-flex justify-content-center">
	<div class="col-md-6">
		<div class="mb-4">
			<AddTodo on:submit={(e) => handleOnAdd(e)} />
		</div>
		<div class="mb-5">
			<h2 class="title">Todos</h2>
			<div class="list-group mb-3">
				{#each unorderedList as todo}
					<TodoItem bind:todo on:change={() => handleOnChange(todo.id)} />
				{/each}
			</div>
			<!-- categories... -->
		</div>
	</div>
</div>

<style>
	.title {
		font-weight: bolder;
	}
</style>
