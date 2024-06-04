<script>
	import NavItem from './navItem.svelte';

	export let selectedIndex = 0;

	let navs = ['bi bi-check-square', 'bi bi-ui-checks-grid', 'bi bi-gear-wide-connected'];
</script>

<div class="d-flex flex-sm-column flex-row flex-nowrap sticky-top pt-3 vh-100">
	<ul class="nav nav-pills nav-fill flex-column mb-auto">
		<li class="nav-item">
			<a
				href="https://github.com/yz-dev21/poly-todo"
				class="link-light text-decoration-none fs-3"
				target="_blank"
				><i class="bi bi-github"></i>
			</a>
		</li>
		<hr />
		{#each navs as nav, index}
			<NavItem
				icon={nav}
				toggle={selectedIndex == index}
				on:select={() => (selectedIndex = index)}
			/>
		{/each}
	</ul>
</div>
