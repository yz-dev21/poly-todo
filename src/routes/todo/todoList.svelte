<script>
	import TodoItem from './todoItem.svelte';
	import AddTodo from './addTodo.svelte';
	import * as ls from '../../ls.js';
	import PolySelector from './polySelector.svelte';

	let todoList = ls.getTodoList();
	let selectedPoly = 0;

	function handleOnAdd(e) {
		let lastId = 0;
		if (todoList.length > 0) lastId = todoList[todoList.length - 1].id;

		todoList.push({
			id: lastId + 1,
			text: e.detail.value,
			done: false
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
	$: console.log(selectedPoly);
</script>

<div class="row">
	<!--   -->
	<div class="col-sm-2 border-end border-secondary-subtle bg-secondary-subtle">
		<PolySelector bind:selectedPoly />
	</div>
	<div class="col">
		<div class="row text-center mt-3">
			<h4 class="title">TodoList</h4>
		</div>
		<div class="row d-flex justify-content-center mt-5">
			<div class="col-md-7">
				<div class="mb-5">
					<AddTodo on:submit={(e) => handleOnAdd(e)} />
				</div>
				<div class="mb-5">
					<ul class="list-group mb-3">
						{#each todoList as todo}
							<TodoItem bind:todo on:change={() => handleOnChange(todo.id)} />
						{/each}
					</ul>
					<!-- categories... -->
				</div>
			</div>
		</div>
	</div>
</div>
