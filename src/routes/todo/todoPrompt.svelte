<script>
	import { slide } from 'svelte/transition';

	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let todoPromptData;
	export let targetTodo;

	let inputText = todoPromptData.text;
	let inputDone = todoPromptData.done;

	const handleOnSubmit = () => {
		if (!inputText) return;

		dispatch('submit', {
			text: inputText,
			done: inputDone
		});
	};
</script>

{#if todoPromptData.show == true}
	<div transition:slide>
		<h1 class="mb-2">{todoPromptData.header}</h1>
		<form on:submit|preventDefault={handleOnSubmit}>
			<div class="mb-3">
				<input type="text" class="form-control" placeholder="Add todo..." bind:value={inputText} />
			</div>
			<div class="form-check">
				<input type="checkbox" class="form-check-input" id="todo_check" bind:checked={inputDone} />
				<label class="form-check-label" for="todo_check">Done</label>
			</div>

			<button type="submit" class="btn btn-primary" value="Submit"
				><i class="bi bi-check-lg" id="bold_icon"></i></button
			>
		</form>
	</div>
{/if}
