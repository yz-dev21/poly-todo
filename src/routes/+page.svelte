<script>
	import Sidebar from './nav/sidebar.svelte';
	import TodoList from './todo/todoList.svelte';
	import PolyList from './poly/polyList.svelte';
	import Settings from './settings.svelte';

	let selectedIndex = 0;
</script>

<div class="container-fluid">
	<div class="row">
		<div class="col-sm-2" id="sidebar">
			<Sidebar bind:selectedIndex />
		</div>
		<div class="col m-3">
			{#if selectedIndex == 0}
				<TodoList />
			{:else if selectedIndex == 1}
				<PolyList />
			{:else if selectedIndex == 2}
				<Settings />
			{/if}
		</div>
	</div>
</div>

<style>
	:global(body) {
		font-family: 'Pretendard', sans-serif;
	}
	.container-fluid {
		width: 100vw;
		height: 100vh;
	}
</style>
