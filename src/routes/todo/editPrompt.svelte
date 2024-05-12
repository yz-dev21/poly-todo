<script>
	import { slide } from 'svelte/transition';

	export let todoPromptData;
</script>

<div transition:slide={{ duration: 200 }} class="border-start ps-5">
	<div class="row">
		<div class="col h1">Edit todo</div>
		<div class="col text-end h3">
			<button class="btn-close"></button>
		</div>
	</div>
	<form>
		<div class="mb-3">
			<input
				type="text"
				class="form-control"
				placeholder="Add todo..."
				bind:value={todoPromptData.todo.text}
			/>
		</div>
		<div class="form-check mb-3">
			<input
				type="checkbox"
				class="form-check-input"
				id="todo_check"
				bind:checked={todoPromptData.todo.done}
			/>
			<label class="form-check-label" for="todo_check">Done</label>
		</div>
	</form>
</div>
