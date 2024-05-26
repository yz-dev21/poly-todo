<script>
	import NavItem from './navItem.svelte';

	export let selectedIndex = 0;

	const createNav = (pIcon, pText) => ({
		icon: pIcon,
		text: pText
	});

	let navs = [
		createNav('bi bi-check2-square', 'Todo'),
		createNav('bi bi-bounding-box-circles', 'Poly'),
		createNav('bi bi-gear-wide-connected', 'Settings')
	];
</script>

<div class="d-flex flex-sm-column flex-row flex-nowrap sticky-top py-3 pe-3 border-end vh-100">
	<a
		href="https://github.com/yz-dev21/poly-todo"
		class="align-items-center link-dark text-decoration-none ps-3"
		><i class="bi bi-github h4"></i><span class="m-2 h4"><strong>PolyTodo</strong></span>
	</a>
	<hr />
	<ul class="nav nav-pills nav-fill flex-column mb-auto">
		{#each navs as nav, index}
			<li class="nav-item mb-3">
				<NavItem
					icon={nav.icon}
					text={nav.text}
					toggle={selectedIndex == index}
					on:select={() => (selectedIndex = index)}
				/>
			</li>
		{/each}
	</ul>
</div>
