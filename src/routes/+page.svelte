<script>
	import Sidebar from './nav/sidebar.svelte';
	import TodoList from './todo/todoList.svelte';
	import PolyList from './poly/polyList.svelte';

	let selectedIndex = 0;
</script>

<div class="container-fluid vh-100 vw-100">
	<div class="row">
		<div class="col-sm-auto border-end border-dark-subtle bg-dark-subtle">
			<Sidebar bind:selectedIndex />
		</div>
		<div class="col mt-3">
			<TodoList />
		</div>
	</div>
</div>
