<script>
	import TodoItem from './todoItem.svelte';
	import TodoPrompt from './todoPrompt.svelte';
	import Modal from '../modal.svelte';
	import * as ls from './ls.js';

	let closeBtn;
	const addPromptModalId = 'addPromptModal';

	let todoList = ls.getTodoList();
	let polyList = ls.getPolyList();
	let categoryList = ls.getCategoryList();

	function handleOnAdd(e) {
		closeBtn.click();

		let lastId = 0;
		if (todoList.length > 0) lastId = todoList[todoList.length - 1].id;

		todoList.push({
			id: lastId + 1,
			text: e.detail.value.text,
			done: e.detail.value.done
		});

		todoList = todoList;
		ls.setTodoList(todoList);
	}
	const handleOnChange = () => {
		ls.setTodoList(todoList);
	};
</script>

<Modal bind:closeBtn id={addPromptModalId} label={'addPromptLabel'} headerText={'Add a new todo'}>
	<TodoPrompt on:submit={(e) => handleOnAdd(e)} />
</Modal>

<div class="row">
	<div class="col">
		<ul class="list-group-flush">
			<button
				class="btn btn-primary mb-3"
				data-bs-toggle="modal"
				data-bs-target="#{addPromptModalId}"
			>
				<i class="bi bi-plus-lg"></i> Add todo
			</button>
			{#each todoList as todo}
				<TodoItem bind:todo on:change={() => handleOnChange()} />
			{/each}
		</ul>
	</div>
</div>
