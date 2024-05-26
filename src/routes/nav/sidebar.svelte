<script>
	import NavItem from './navItem.svelte';

	export let selectedIndex = 0;

	let navs = [
		'fs-4 bi bi-check2-square','fs-4 bi bi-gear-wide-connected'
	];
</script>

<div class="d-flex flex-sm-column flex-row flex-nowrap sticky-top pt-3 pe-3 border-end vh-100 vw-5">
	<ul class="nav nav-pills nav-fill flex-column mb-auto">
		<li class="nav-item"><a
			href="https://github.com/yz-dev21/poly-todo"
			class="link-dark text-decoration-none"
			target="_blank"
			><i class="fs-3 bi bi-github h4"></i>
		</a></li>
		<hr />
			{#each navs as nav, index}
			<li class="nav-item mb-3">
				<NavItem
					icon={nav}
					toggle={selectedIndex == index}
					on:select={() => (selectedIndex = index)}
				/>
			</li>
		{/each}
	</ul>
</div>

<style>
	div {
		padding-left: 0;
	}
</style>
