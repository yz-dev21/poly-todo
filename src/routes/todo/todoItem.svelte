<script>
	import TodoModal from './todoModal.svelte';

	import { slide } from 'svelte/transition';

	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let todo;

	const editTodoModalId = 'editTodoModal' + todo.id;

	const handleOnEdit = (e) => {
		todo = { ...e.detail.value };
		dispatch('change');
	};
</script>

<li transition:slide={{ duration: 250 }} class="list-group-item">
	<div class="row">
		<div class="col text-start">
			<div class="form-check-inline">
				<input
					type="checkbox"
					id="todo_check{todo.id}"
					class="form-check-input me-3"
					name={todo.id}
					bind:checked={todo.done}
					on:change={() => {
						dispatch('change');
					}}
				/>
				<label
					class="form-check-label"
					id={todo.done ? 'strikethrough' : ''}
					for="todo_check{todo.id}">{todo.text}</label
				>
			</div>
		</div>
		<div class="col-sm-2 text-end">
			<button
				class="btn btn-light btn-sm rounded-circle"
				data-bs-toggle="modal"
				data-bs-target="#{editTodoModalId}"><i class="bi bi-three-dots"></i></button
			>
		</div>
	</div>

	<TodoModal id={editTodoModalId} title="Edit a todo" {todo} on:submit={(e) => handleOnEdit(e)} />
</li>

<style>
	.btn-light,
	.btn-light:hover {
		background-color: transparent;
		outline: none;
		border: none;
	}
	#strikethrough {
		text-decoration: line-through;
	}
</style>
