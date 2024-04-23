<script>
	import Sidebar from './sidebar.svelte';
	import TodoList from './todoList.svelte';
</script>

<div class="container-fluid">
	<div class="row">
		<div class="col-sm-2">
			<Sidebar />
		</div>
		<div class="col">
			<TodoList />
		</div>
	</div>
</div>

<style>
	:global(body) {
		font-family: 'Pretendard', sans-serif;
	}
</style>
