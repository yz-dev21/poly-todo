<script>
	import { slide } from 'svelte/transition';

	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	let inputText = '';
	let inputDone = false;

	const handleOnSubmit = () => {
		if (!inputText) return;

		dispatch('add', {
			text: inputText,
			done: inputDone
		});

		inputText = '';
		inputDone = false;
	};
</script>

<div transition:slide={{ duration: 200 }} class="border-start ps-5">
	<div class="row">
		<div class="col h1">Add todo</div>
		<div class="col text-end h3">
			<button class="btn-close"></button>
		</div>
	</div>
	<form on:submit|preventDefault={handleOnSubmit}>
		<div class="mb-3">
			<input type="text" class="form-control" placeholder="Add todo..." bind:value={inputText} />
		</div>
		<div class="form-check mb-3">
			<input type="checkbox" class="form-check-input" id="todo_check" bind:checked={inputDone} />
			<label class="form-check-label" for="todo_check">Done</label>
		</div>
		<button type="submit" class="btn btn-primary" value="Submit"
			><i class="bi bi-check-lg" id="bold_icon"></i></button
		>
	</form>
</div>
