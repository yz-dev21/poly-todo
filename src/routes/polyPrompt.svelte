<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	let inputValue = '';

	const handleOnSubmit = () => {
		if (!inputValue) return;

		dispatch('addPoly', {
			value: inputValue
		});

		inputValue = '';
	};
</script>

<form on:submit|preventDefault={handleOnSubmit}>
	<div class="input-group mb-3">
		<input type="text" class="form-control" placeholder="Add Poly" bind:value={inputValue} />
		<button class="btn btn-outline-primary"><i class="bi bi-plus-lg"></i></button>
	</div>
</form>

<style>
</style>
