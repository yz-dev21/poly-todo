<script>
	import { slide } from 'svelte/transition';

	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let todo;
</script>

<!--
	역주행 transition 이 엉성하게 보이는 부분은 index 로 조건문 나눠서 방향 수정하는 것으로 가능할 듯
-->
<!-- duration 값으로 속도 변경 -->
<li
	transition:slide={{ duration: 250 }}
	class="list-group-item border-0 d-flex align-items-center ps-0"
>
	<input type="checkbox" class="form-check-input me-3" name={todo.text} bind:checked={todo.done} />
	<span>{todo.text}</span>
	<button class="btn-close shadow-none" on:click={() => dispatch('delete')}></button>
</li>

<style>
</style>
