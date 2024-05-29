<script>
	export let polyList;
	export let categoryList;
</script>

{#each polyList as poly}
	<div class="card">
		<div class="card-header">
			{poly.name}
		</div>
		<ul class="list-group"></ul>
	</div>
{/each}
