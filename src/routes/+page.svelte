<script>
	import Sidebar from './nav/sidebar.svelte';
	import TodoList from './todo/todoList.svelte';
	import PolyList from './poly/polyList.svelte';
	import Settings from './settings.svelte';

	const getIndex = () => {
		let index = sessionStorage.getItem('index');
		if (!index) index = 0;
		return index;
	};
	const setIndex = (i) => {
		sessionStorage.setItem('index', i.toString());
	};

	let selectedIndex = getIndex();
	$: setIndex(selectedIndex);
</script>

<div class="container-fluid vh-100 vw-100">
	<div class="row">
		<div class="col-sm-auto border-end border-dark-subtle bg-dark-subtle">
			<Sidebar bind:selectedIndex />
		</div>
		<div class="col mt-3">
			{#if selectedIndex == 0}
				<TodoList />
			{:else if selectedIndex == 1}
				<PolyList />
			{:else}
				<Settings />
			{/if}
		</div>
	</div>
</div>
