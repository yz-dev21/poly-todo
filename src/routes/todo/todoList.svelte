<script>
	import TodoItem from './todoItem.svelte';
	import AddTodo from './addTodo.svelte';
	import * as ls from '../../ls.js';

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

<div class="row text-center mb-4">
	<h4 class="title">TodoList</h4>
	<div class="dropdown">
		<button
			class="btn btn-secondary dropdown-toggle"
			type="button"
			data-bs-toggle="dropdown"
			aria-expanded="false"
		>
			Dropdown button
		</button>
		<ul class="dropdown-menu dropdown-menu-dark bg-secondary-subtle">
			<li><a class="dropdown-item active" href="#">Action</a></li>
			<li><a class="dropdown-item" href="#">Another action</a></li>
			<li><a class="dropdown-item" href="#">Something else here</a></li>
			<li><hr class="dropdown-divider" /></li>
			<li><a class="dropdown-item" href="#">Separated link</a></li>
		</ul>
	</div>
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
