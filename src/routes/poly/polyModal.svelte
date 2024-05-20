<script>
	import Modal from '../modal.svelte';
	import PolyForm from './polyForm.svelte';

	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let id;
	export let title;

	let closeBtn;
	let focusField;

	const handleOnSubmit = (e) => {
		closeBtn.click();

		dispatch('submit', {
			value: e.detail.value
		});
	};
</script>

<Modal bind:closeBtn {id} {title} on:shown={() => focusField.focus()}>
	<PolyForm on:submit={(e) => handleOnSubmit(e)} bind:focusField />
</Modal>
