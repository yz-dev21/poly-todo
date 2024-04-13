<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	let inputValue;

	function handleOnSubmit() {
		if (!inputValue) return;

		dispatch('addTodo', {
			value: inputValue
		});

		inputValue = '';
	}
</script>

<!-- UI so sucks -->
<form on:submit|preventDefault={handleOnSubmit}>
	<fieldset role="group">
		<!-- ^ Ignore warning. -->
		<input type="text" placeholder="Add Todo" bind:value={inputValue} />
		<button class="outline">+</button>
	</fieldset>
</form>

<style>
</style>