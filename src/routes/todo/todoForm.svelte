<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let focusField;
	export let todo = {
		id: 0,
		text: '',
		done: false
	};

	const handleOnSubmit = () => {
		if (!todo.text) return;

		dispatch('submit', {
			value: todo
		});

		todo.text = '';
		todo.done = false;
	};
</script>

<form on:submit|preventDefault={handleOnSubmit}>
	<div class="modal-body">
		<div class="mb-3">
			<input
				type="text"
				class="form-control"
				placeholder="Text"
				bind:value={todo.text}
				bind:this={focusField}
				spellcheck="false"
			/>
		</div>
		<div class="form-check mb-3">
			<input
				type="checkbox"
				class="form-check-input"
				id="todo_form_check{todo.id}"
				bind:checked={todo.done}
			/>
			<label class="form-check-label" for="todo_form_check{todo.id}">Done</label>
		</div>
	</div>
	<div class="modal-footer">
		{#if todo.id != 0}
			<button
				type="submit"
				class="btn btn-outline-primary"
				on:click={() => (todo.id = -1)}
				value="delete"><i class="bi bi-trash"></i></button
			>
		{/if}
		<button type="submit" class="btn btn-primary" value="submit"
			><i class="bi bi-check-lg" id="bold_icon"></i></button
		>
	</div>
</form>
