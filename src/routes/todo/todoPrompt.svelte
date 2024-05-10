<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	let inputValue = '';

	const handleOnSubmit = () => {
		if (!inputValue) return;

		dispatch('add', {
			value: inputValue
		});

		inputValue = '';
	};
</script>


<form on:submit|preventDefault={handleOnSubmit}>
	<div class="mb-3">
		<input
			type="text"
			class="form-control"
			placeholder="Add todo"
			bind:value={inputValue}
			
		/>
	</div>
	<div class="mb-3">
		<textarea class="form-control" placeholder="Add comments" rows="4"></textarea>
	</div>
	<button type="submit" class="btn btn-yellow" value="Submit"
		><i class="bi bi-check-lg" id="bold_icon"></i></button
	>
</form>

<style>
	.btn-yellow,
	.btn-yellow:focus {
		background-color: #f9e2af;
		border: none;
	}
	.btn-yellow:hover {
		background-color: #e4d1a4;
	}
</style>
