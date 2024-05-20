<script>
	import TodoItem from './todoItem.svelte';
	import TodoModal from './todoModal.svelte';
	import * as ls from '../../ls.js';

	const addTodoModalId = 'addTodoModal';

	let todoList = ls.getTodoList();

	function handleOnAdd(e) {
		let lastId = 0;
		if (todoList.length > 0) lastId = todoList[todoList.length - 1].id;

		todoList.push({
			id: lastId + 1,
			text: e.detail.value.text,
			done: e.detail.value.done
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
</script>

<TodoModal id={addTodoModalId} title="Add a new todo" on:submit={(e) => handleOnAdd(e)} />

<div class="row">
	<div class="col">
		<ul class="list-group-flush">
			<button
				class="btn btn-primary mb-3"
				data-bs-toggle="modal"
				data-bs-target="#{addTodoModalId}"
			>
				<i class="bi bi-plus-lg"></i> Add todo
			</button>
			{#each todoList as todo}
				<TodoItem bind:todo on:change={() => handleOnChange(todo.id)} />
			{/each}
		</ul>
	</div>
</div>
