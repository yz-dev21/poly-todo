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
			done: e.detail.value.done,
			category: []
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
<div class="row d-flex overflow-x-auto flex-nowrap pt-3 h-100">
	{#each { length: 10 } as _}
		<div class="col-sm-6 col-md-4 col-xl-3">
			<div class="card">
				<div class="card-header">
					<h3 class="card-title">TITLE</h3>
				</div>
				<div class="card-body">
					<ul class="list-group-flush p-0">
						{#each todoList as todo}
							<TodoItem bind:todo on:change={() => handleOnChange(todo.id)} />
						{/each}
						<li class="list-group-item border-0 d-flex align-items-center ps-0 mb-3 text-start">
							<button
								class="btn btn-primary w-100"
								data-bs-toggle="modal"
								data-bs-target="#{addTodoModalId}"
							>
								<i class="bi bi-plus-lg"></i> Add a new todo
							</button>
						</li>
					</ul>
				</div>
			</div>
		</div>
	{/each}
</div>
