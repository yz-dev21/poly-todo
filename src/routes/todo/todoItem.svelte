<script>
	import { slide } from 'svelte/transition';

	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let todo;
</script>

<li
	transition:slide={{ duration: 250 }}
	class="list-group-item border-0 d-flex align-items-center ps-0 mb-3 text-start"
>
	<div class="card w-75">
		<div class="row">
			<div class="col">
				<div class="card-body">
					<div class="form-check-inline">
						<input
							type="checkbox"
							id="todo_check"
							class="form-check-input me-3"
							name={todo.text}
							bind:checked={todo.done}
						/>
						<label class="form-check-label" id={todo.done ? 'strikethrough' : ''} for="todo_check"
							>{todo.text}</label
						>
					</div>
				</div>
			</div>
			<div class="col-sm-1 align-self-center">
				<button
					class="btn btn-light btn-sm rounded-circle"
					on:click={() => {
						dispatch('edit');
					}}><i class="bi bi-three-dots"></i></button
				>
			</div>
		</div>
	</div>
</li>

<style>
	#strikethrough {
		text-decoration: line-through;
	}
</style>
