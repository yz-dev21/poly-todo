<script>
	export let todoList;
	let inputValue;

	function handleOnSubmit() {
		if (!inputValue) return;

		let lastId = 0;
		if (todoList.length > 0) lastId = todoList[todoList.length - 1].id;

		const newTodo = {
			id: lastId + 1,
			text: inputValue,
			done: false
		};

		todoList.push(newTodo);
		todoList = todoList; // For reactivity - updates UI on submit.

		// console.log(todoList);
	}
</script>

<!-- UI so sucks -->
<form on:submit={handleOnSubmit}>
	<fieldset role="group">
		<!-- ^ Ignore warning. -->
		<input type="text" placeholder="Add Todo" bind:value={inputValue} />
		<button class="outline">+</button>
	</fieldset>
</form>

<style>
	input {
		width: 100%;
	}
</style>
