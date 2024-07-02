<script>
	import PolyItem from './polyItem.svelte';
	import * as ls from '../../ls';

	export let selectedPoly = 0;

	let polyList = ls.getPolyList();
</script>

<div class="d-flex flex-sm-column flex-row flex-nowrap sticky-top pt-3 vh-100">
	<ul class="nav nav-pills nav-fill flex-column mb-auto">
		{#each polyList as poly, index}
			<PolyItem
				text={poly.name}
				toggle={selectedPoly == index}
				on:select={() => (selectedPoly = index)}
			/>
		{/each}
		<!-- <li class="nav-item">
			<button class="btn btn-dark bg-dark-subtle w-100"><i class="bi bi-plus-circle"></i></button>
		</li> -->
	</ul>
</div>

<!-- <style>
	button {
		color: var(--bs-light);
		border-color: var(--bs-light-bg-subtle);
	}
	button:hover {
		color: var(--bs-primary);
		border-color: var(--bs-primary);
	}
</style> -->
