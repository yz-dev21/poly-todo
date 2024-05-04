<script>
	import PolyPrompt from './polyPrompt.svelte';
    import PolyItem from './polyItem.svelte';

	let polyList = [
        {
            id:1,
            name:"DEBUG_POLY_1"
        },
        {
            id:2,
            name:"DEBUG_POLY_2"
        }
    ];

	const createPoly = (pId, pName) => ({
		id: pId,
		name: pName
	});

	function handleOnAddPoly(e) {
		let lastId = 0;
		if (polyList.length > 0) lastId = polyList[polyList.length - 1].id;

		polyList.push(createPoly(lastId + 1, e.detail.value));
		polyList = polyList;
	}

	const handleOnDeletePoly = (id) => {
		polyList = polyList.filter((val) => val.id != id);
	};
</script>


<PolyPrompt on:addPoly={(e) => handleOnAddPoly(e)} />

<ul>
	{#each polyList as poly}
		<PolyItem {poly} on:deletePoly={() => handleOnDeletePoly(poly.id)} />
	{/each}
</ul>
