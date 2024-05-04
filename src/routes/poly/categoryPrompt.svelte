<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

    // export let poly;

	let inputValue = '';

	const handleOnSubmit = () => { // 이거 todoPrompt에서랑 함수이름 겹쳐도 문제 없는거지?
		if (!inputValue) return;

		dispatch('addCategory', {
			value: inputValue
		});

		inputValue = '';
	};
</script>

<form on:submit|preventDefault={handleOnSubmit}>
	<div class="input-group mb-3">
		<input type="text" class="form-control" placeholder="Add Category" bind:value={inputValue} />
		<button class="btn btn-outline-primary"><i class="bi bi-plus-lg"></i></button>
	</div>
</form>

<style>
</style>
