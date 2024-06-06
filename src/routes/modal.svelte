<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let closeBtn;
	export let id;
	export let title;
	const label = id + 'Label';
</script>

<div
	on:shown.bs.modal={() => dispatch('shown')}
	class="modal fade"
	{id}
	data-bs-backdrop="static"
	tabindex="-1"
	aria-labelledby={label}
	aria-hidden="true"
>
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header bg-dark-subtle">
				<h4 class="modal-title title" id={label}>{title}</h4>
				<button
					type="button"
					class="btn-close"
					data-bs-dismiss="modal"
					aria-label="Close"
					bind:this={closeBtn}
				></button>
			</div>
			<slot />
		</div>
	</div>
</div>
