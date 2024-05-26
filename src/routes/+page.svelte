<script>
	import Sidebar from './nav/sidebar.svelte';
	import TodoList from './todo/todoList.svelte';
	import PolyList from './poly/polyList.svelte';
	import Settings from './settings.svelte';

	let selectedIndex = 0;
</script>

<div class="container-fluid vh-100 vw-100">
	<div class="row">
		<div class="col-sm-auto">
			<Sidebar bind:selectedIndex />
		</div>
		<div class="col mt-3">
			{#if selectedIndex == 0}
			<TodoList />
			{:else if selectedIndex == 1}
			<Settings />
			{/if}
		</div>
		<div class="col-md-4">
			<PolyList />
		</div>
	</div>
</div>
