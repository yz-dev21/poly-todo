<script>
	import TodoItem from './todoItem.svelte';
	import TodoModal from './todoModal.svelte';
	import * as ls from '../../ls.js';

	const addTodoModalId = 'addTodoModal';

	let todoList = ls.getTodoList();
	let polyList = ls.getPolyList();
	let categoryList = ls.getCategoryList();

	let highestId = 0;

	function handleOnAdd(e) {
		let lastId = 0;
		if (todoList.length > 0) lastId = todoList[todoList.length - 1].id;
		if (highestId <= lastId) highestId = lastId;

		todoList.push({
			id: highestId + 1,
			text: e.detail.value.text,
			done: e.detail.value.done,
			category: [currentCategory]
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

	// let selectedPoly = polyList[0];
	let selectedPoly = 0; // will add feature
	let selectedCategories = [];
	categoryList.forEach((e) => {
		if (e.poly == selectedPoly) {
			selectedCategories.push(e);
		}
	});
	let currentCategory = 0;
</script>

<TodoModal id={addTodoModalId} title="Add a new todo" on:submit={(e) => handleOnAdd(e)} />
{#each { length: 10 } as _}
	<div class="col-md-5 ps-5 mb-3 w-100">
		<h1>title</h1>
		<ul class="list-group mb-3">
			{#each todoList as todo}
				<TodoItem bind:todo on:change={() => handleOnChange(todo.id)} />
			{/each}
		</ul>
		<button
			class="btn btn-primary w-100"
			data-bs-toggle="modal"
			data-bs-target="#{addTodoModalId}"
			on:click={() => (currentCategory = category.id)}
		>
			<i class="bi bi-plus-lg"></i> Add a new todo
		</button>
	</div>
{/each}
