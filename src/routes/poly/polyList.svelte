<script>
	import PolyPrompt from './polyPrompt.svelte';
	import PolyItem from './polyItem.svelte';

	let polyList = [
		// 폴리 아래, 하위 폴리를 여러 개 두지 않고 하나의 카테고리만 만들 거면 굳이 필요없지만 하위 폴리를 여러 겹 둘거면 linked list의 구현이 필요할지도.
		{
			id: 1,
			name: 'DEBUG_POLY_1',
			category: [1, 3]
		},
		{
			id: 2,
			name: 'DEBUG_POLY_2',
			category: [2, 4]
		}
	];

	let categoryList = [
		// "categoryList" 이거 너무 catchy하지가 않아요 당신의 작명센스를 보여줘
		{
			id: 1,
			name: 'CATEGORY_1',
			item: [1]
		},
		{
			id: 2,
			name: 'CATEGORY_2',
			item: [3, 4]
		},
		{
			id: 3,
			name: 'CATEGORY_3',
			item: []
		},
		{
			id: 4,
			name: 'CATEGORY_4',
			item: []
		}
	];

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
	}

	const handleOnDeletePoly = (id) => {
		polyList = polyList.filter((val) => val.id != id);
	};
</script>

<PolyPrompt on:addPoly={(e) => handleOnAddPoly(e)} />

<ul>
	{#each polyList as poly}
		<PolyItem {poly} {categoryList} on:deletePoly={() => handleOnDeletePoly(poly.id)} />
	{/each}
</ul>
