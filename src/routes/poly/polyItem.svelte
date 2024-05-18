<script>
	import * as ls from '../todo/ls';

	let todoList = ls.getTodoList();
	let polyList = ls.getPolyList();
	// let categoryList = ls.getCategoryList();
	let categoryList = [];

	import { slide } from 'svelte/transition';

	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	import CategoryPrompt from './categoryPrompt.svelte';
	import CategoryItem from './categoryItem.svelte';

	export let poly;
	
	let closeBtn;
	const editPromptModalId = 'editPromptModal';

	const createCategory = (pId, pName) => ({
		id: pId,
		name: pName,
		item: []
	});

	function handleOnAdd(e) {
		let lastId = 0;
		if (categoryList.length > 0) lastId = categoryList[categoryList.length - 1].id;

		categoryList.push(createCategory(lastId + 1, e.detail.value));
		poly.category.push(lastId + 1);
		categoryList = categoryList;
		ls.setCategoryList(categoryList);
	}

	const handleOnDelete = (id) => {
		categoryList = categoryList.filter((val) => val.id != id);
		ls.setCategoryList(categoryList);
	};

</script>

<li class="list-group-item border-0 d-flex align-items-center ps-0 mb-3 text-start" transition:slide={{ duration: 250 }}>
	<div class="card w-75">
		<div class="row">
			<div class="col">
				<div class="card-body">
					<div class="form-check-inline">
						<span>{poly.name}</span>
						<ul>
							{#each categoryList as category}
								{#if poly.category.includes(category.id)}
									<CategoryItem {category} />
								{/if}
							{/each}
						</ul>
						<CategoryPrompt
						{poly}
						on:add={(e) => {
							console.log(categoryList);
							console.log("비동기처리...???????????");
							handleOnAdd(e);
						}}
						/>
						
					</div>
				</div>
			</div>
			<!-- delete는 나중에 edit으로 합쳐야함! -->
			<div class="col-sm-2 align-self-center text-end">
				<button class="btn-close shadow-none" on:click={() => dispatch('delete')}></button>
			</div>
			<div class="col-sm-2 align-self-center text-end">
				<button
					class="btn btn-light btn-sm rounded-circle"
					data-bs-toggle="modal"
					data-bs-target="#{editPromptModalId}"><i class="bi bi-three-dots"></i></button
				>
			</div>
		</div>
	</div>
</li>

<style>
	.btn-light,
	.btn-light:hover {
		background-color: transparent;
		outline: none;
		border: none;
	}
</style>
