<script>
	import { fade } from 'svelte/transition';

	import Sidebar from './nav/sidebar.svelte';
	import TodoList from './todo/todoList.svelte';
	import PolyList from './poly/polyList.svelte';
	import Settings from './settings.svelte';

	let selectedIndex = 0;
</script>

<div class="container-fluid">
	<div class="row">
		<div class="col-sm-2">
			<Sidebar bind:selectedIndex />
		</div>
		<div class="col m-3">
			{#if selectedIndex == 0}
				<div>
					<TodoList />
				</div>
			{:else if selectedIndex == 1}
				<div>
					<PolyList />
				</div>
			{:else if selectedIndex == 2}
				<div>
					<Settings />
				</div>
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
