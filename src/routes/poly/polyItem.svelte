<script>
	// import { slide } from 'svelte/transition';

	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

    import CategoryPrompt from './categoryPrompt.svelte';
    import CategoryItem from './categoryItem.svelte';

	export let poly;
    export let categoryList;
    
    const createCategory = (pId, pName) => ({
        id: pId,
        name: pName,
        item: []
    });
    
    function handleOnAddCategory(e) {
		let lastId = 0;
		if (categoryList.length > 0) lastId = categoryList[categoryList.length - 1].id;

		categoryList.push(createCategory(lastId + 1, e.detail.value));
        poly.category.push(lastId + 1)
		categoryList = categoryList;
	}
    
    const handleOnDeleteCategory = (id) => {
		categoryList = categoryList.filter((val) => val.id != id);
	};

</script>

<!-- <li
	transition:slide={{ duration: 250 }}
	class="list-group-item border-0 d-flex align-items-center ps-0"
> -->

<div>
	<div>
	    <span>{poly.name}</span>
	    <button class="btn-close shadow-none" on:click={() => dispatch('deletePoly')}></button>
    </div>
    <CategoryPrompt {poly} on:addCategory={(e) => {handleOnAddCategory(e)}} />
    <ul>
        {#each categoryList as category}
            {#if poly.category.includes(category.id)}
                <CategoryItem {category} />
            {/if}
        {/each}
    </ul>
</div>

<style>
</style>
