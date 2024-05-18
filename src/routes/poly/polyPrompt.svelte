<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	let inputValue = '';

	const handleOnSubmit = () => {
		if (!inputValue) return;

		dispatch('submit', {
			value: inputValue
		});

		inputValue = '';
	};
</script>

<form on:submit|preventDefault={handleOnSubmit}>
	<div class="modal-body">
		<div class="mb-3">
			<input type="text" class="form-control" placeholder="Text" bind:value={inputValue} />
		</div>
	</div>
	<div class="modal-footer">
		<button type="submit" class="btn btn-primary" value="Submit"
			><i class="bi bi-check-lg" id="bold_icon"></i></button
		>
	</div>
</form>

<style>
</style>
