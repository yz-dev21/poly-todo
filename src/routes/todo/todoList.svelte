<script>
	import TodoItem from './todoItem.svelte';
	import TodoModal from './todoModal.svelte';
	import AddTodo from './addTodo.svelte';
	import * as ls from '../../ls.js';

	const addTodoModalId = 'addTodoModal';

	let todoList = ls.getTodoList();

	let unorderedList = [];

	function handleOnAdd(e) {
		let lastId = 0;
		if (todoList.length > 0) lastId = todoList[todoList.length - 1].id;

		todoList.push({
			id: lastId + 1,
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
	<h4 class="title">TodoList</h4>
</div>
<div class="row d-flex justify-content-center">
	<div class="col-md-6">
		<div class="mb-5">
			<AddTodo on:submit={(e) => handleOnAdd(e)} />
		</div>
		<div class="mb-5">
			<ul class="list-group mb-3">
				{#each unorderedList as todo}
					<TodoItem bind:todo on:change={() => handleOnChange(todo.id)} />
				{/each}
			</ul>
			<!-- categories... -->
		</div>
	</div>
</div>

<style>
	.title {
		font-weight: bolder;
	}
</style>
