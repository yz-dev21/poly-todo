<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	let inputValue;

	const handleOnSubmit = () => {
		if (!inputValue) return;

		dispatch('submit', {
			value: inputValue
		});

		inputValue = '';
	};
</script>

<form on:submit|preventDefault={() => handleOnSubmit()}>
	<div class="list-group">
		<div class="list-group-item list-group-item-secondary">
			<div class="row align-items-center">
				<div class="col">
					<!-- svelte-ignore a11y-autofocus -->
					<input
						type="text"
						placeholder="Add a new todo..."
						class="form-control"
						bind:value={inputValue}
						autofocus
					/>
				</div>
				<div class="col-sm-2 text-end">
					<button type="submit" class="btn btn-primary btn-sm rounded-circle"
						><i class="bi bi-plus-lg"></i></button
					>
				</div>
			</div>
		</div>
	</div>
</form>

<style>
	input,
	input:focus {
		outline: none;
		border: none;
		box-shadow: none;
		background-color: transparent;
	}
</style>
