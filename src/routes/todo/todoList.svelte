<script>
	import AddPrompt from './addPrompt.svelte';
	import EditPrompt from './editPrompt.svelte';
	import TodoItem from './todoItem.svelte';

	const createTodo = (pId, pText, pDone) => ({
		id: pId,
		text: pText,
		done: pDone
	});

	let todoList = [];

	// <TodoPrompt /> 의 UI 와 기능이 필요로 하는 데이터를 한 Object 에 담음.
	let todoPromptData = {
		todo: {},
		show: false,
		isAdd: true
	};

	function handleOnAdd(e) {
		let lastId = 0;
		if (todoList.length > 0) lastId = todoList[todoList.length - 1].id;

		todoList.push(createTodo(lastId + 1, e.detail.text, e.detail.done));

		todoList = todoList;
	}
	const handleOnEditPrompt = (todo) => {
		todoPromptData.show = true;
		todoPromptData.isAdd = false;
		todoPromptData.todo = todo;
	};
	const handleOnAddPrompt = () => {
		todoPromptData.show = true;
		todoPromptData.isAdd = true;

		console.log(todoList);
	};
	$: todoPromptData.todo, (todoList = todoList);
</script>

<div class="row">
	<div class="col">
		<ul class="list-group-flush">
			<button class="btn btn-primary mb-3" on:click={() => handleOnAddPrompt()}>
				<i class="bi bi-plus-lg"></i> Add todo
			</button>
			{#each todoList as todo}
				<TodoItem bind:todo on:editPrompt={() => handleOnEditPrompt(todo)} />
			{/each}
		</ul>
	</div>
	<!-- 이상하게 중첩 if 를 사용하면 애니메이션이 제대로 작동하지 않는 문제가 있어 이렇게 냅둠. -->
	<div class="col-md-5 h-100">
		{#if todoPromptData.show && todoPromptData.isAdd}
			<AddPrompt on:add={(e) => handleOnAdd(e)} />
		{:else if todoPromptData.show && !todoPromptData.isAdd}
			<EditPrompt bind:todoPromptData />
		{/if}
	</div>
</div>
