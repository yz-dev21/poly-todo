<script>
	import Sidebar from './nav/sidebar.svelte';
	import TodoList from './todo/todoList.svelte';
	import PolyList from './poly/polyList.svelte';

	import { slide } from 'svelte/transition';

	let selectedIndex = 0;
</script>

<div class="container-fluid vh-100 vw-100">
	<div class="row">
		<div class="col-sm-auto border-end border-dark-subtle bg-dark-subtle">
			<Sidebar bind:selectedIndex />
		</div>
		<div class="col mt-3">
			<!-- 심심해서 애니메이션 넣어봤는데 영 아니면 삭제 해 / slide 외 다른 애니메이션들은 버그 발생함. 왜 발생하는진 알겠는데 고치기 귀찮음. -->
			{#if selectedIndex == 0}
				<div transition:slide={{ duration: 250 }}>
					<TodoList />
				</div>
			{:else}
				<div transition:slide={{ duration: 250 }}>
					<PolyList />
				</div>
			{/if}
		</div>
	</div>
</div>
