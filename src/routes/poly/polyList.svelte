<script>
	import PolyForm from './polyForm.svelte';
	import PolyItem from './polyItem.svelte';
	import Modal from '../modal.svelte';
	import * as ls from '../../ls';

	let todoList = ls.getTodoList();
	let polyList = ls.getPolyList();
	let categoryList = ls.getCategoryList();

	let closeBtn;
	const addPromptModalId = 'addPromptModal';

	const createPoly = (pId, pName) => ({
		id: pId,
		name: pName,
		category: []
	});

	function handleOnAdd(e) {
		closeBtn.click();
		let lastId = 0;
		if (polyList.length > 0) lastId = polyList[polyList.length - 1].id;

		polyList.push(createPoly(lastId + 1, e.detail.value));
		polyList = polyList;
		ls.setPolyList(polyList);
	}

	const handleOnDelete = (id) => {
		console.log('Delete Poly');
		polyList = polyList.filter((val) => val.id != id);
		ls.setPolyList(polyList);
	};
</script>

<Modal bind:closeBtn id={addPromptModalId} title="Add a new Poly">
	<PolyForm on:submit={(e) => handleOnAdd(e)} />
</Modal>

<div class="row">
	<div class="col">
		<ul class="list-group-flush">
			<button
				class="btn btn-primary mb-3"
				data-bs-toggle="modal"
				data-bs-target="#{addPromptModalId}"
			>
				<i class="bi bi-plus-lg"></i> Add Poly
			</button>
			{#each polyList as poly}
				<PolyItem {poly} on:delete={() => handleOnDelete(poly.id)} />
			{/each}
		</ul>
	</div>
</div>
