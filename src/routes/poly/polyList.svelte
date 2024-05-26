<script>
	import PolyModal from './polyModal.svelte';
	import PolyItem from './polyItem.svelte';
	import * as ls from '../../ls';

	let polyList = ls.getPolyList();

	const addPolyModalId = 'addPolyModal';

	const createPoly = (pId, pName) => ({
		// 걍 이거 handleOnAdd()에 넣어버릴까?
		id: pId,
		name: pName,
		category: []
	});

	if (polyList.length == 0) {
		polyList.push(createPoly(0, 'Inbox'));
		polyList = polyList;
		ls.setPolyList(polyList);
	}

	function handleOnAdd(e) {
		let lastId = 0;
		if (polyList.length > 0) lastId = polyList[polyList.length - 1].id;

		polyList.push(createPoly(lastId + 1, e.detail.value));
		polyList = polyList;
		ls.setPolyList(polyList);
	}

	const handleOnDelete = (id) => {
		polyList = polyList.filter((val) => val.id != id);
		ls.setPolyList(polyList);
	};
</script>

<PolyModal id={addPolyModalId} title="Add a new poly" on:submit={(e) => handleOnAdd(e)} />

<div class="d-flex flex-sm-column flex-row flex-nowrap sticky-top pt-3 pe-3 border-end vh-100 vw-5">
	<div class="col">
		<ul class="list-group-flush">
			<button
				class="btn btn-primary mb-3"
				data-bs-toggle="modal"
				data-bs-target="#{addPolyModalId}"
			>
				<i class="bi bi-plus-lg"></i> Add Poly
			</button>
			{#each polyList as poly, index}
				<PolyItem {poly} {index} on:delete={() => handleOnDelete(poly.id)} />
			{/each}
		</ul>
	</div>
</div>
