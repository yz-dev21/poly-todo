<script>
    import PolyPrompt from './polyPrompt.svelte';
	import PolyItem from './polyItem.svelte';
	import { setPolyList } from '../todo/ls';
    import * as ls from '../todo/ls';

	let todoList = ls.getTodoList();
	let polyList = ls.getPolyList();
	let categoryList = ls.getCategoryList();

	const createPoly = (pId, pName) => ({
		id: pId,
		name: pName,
		category: []
	});

	function handleOnAddPoly(e) {
		let lastId = 0;
		if (polyList.length > 0) lastId = polyList[polyList.length - 1].id;

		polyList.push(createPoly(lastId + 1, e.detail.value));
		polyList = polyList;
		setPolyList(polyList);
	}

	const handleOnDeletePoly = (id) => {
		polyList = polyList.filter((val) => val.id != id);
        setPolyList(polyList);
	};

</script>

<PolyPrompt on:add={(e) => handleOnAddPoly(e)} />

<ul>
	{#each polyList as poly}
		<PolyItem {poly} {categoryList} on:delete={() => handleOnDeletePoly(poly.id)} />
	{/each}
</ul>
