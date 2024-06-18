<script>
	import { saveAs } from 'file-saver';
	import * as ls from '../ls.js';

	let fileInput;

	const getDateString = () => {
		const today = new Date();

		const year = today.getFullYear();
		const month = (today.getMonth() + 1).toString().padStart(2, '0');
		const day = today.getDate().toString().padStart(2, '0');

		return `${year}${month}${day}`;
	};

	const download = () => {
		const json = {
			todoList: ls.getTodoList(),
			polyList: ls.getPolyList(),
			categoryList: ls.getCategoryList()
		};
		const blob = new Blob([JSON.stringify(json)], {
			type: 'application/json'
		});

		saveAs(blob, 'poly-todo-' + getDateString() + '.json');
	};
	const upload = (e) => {
		if (e.target.files.length <= 0) return;

		const fr = new FileReader();
		fr.onload = () => {
			const obj = JSON.parse(fr.result);
			ls.setTodoList(obj.todoList);
			ls.setPolyList(obj.polyList);
			ls.setCategoryList(obj.categoryList);
		};
		fr.readAsText(e.target.files[0]);
	};
</script>

<div class="row text-center mb-5">
	<h4 class="title">Settings</h4>
</div>
<div class="row d-flex justify-content-center align-items-center">
	<div class="col-md-6 mt-5">
		<div class="row text-center">
			<div class="col"><span class="h1 title">Data Backup & Import</span></div>
		</div>
		<div class="row mt-4">
			<div class="col">
				<div class="card big-card">
					<button
						class="card-body bg-secondary-subtle border border-primary rounded title"
						on:click={() => download()}
					>
						<i class="bi bi-download bold-icon h1 mt-5"></i>
						<p class="">Download</p>
					</button>
				</div>
			</div>
			<div class="col">
				<div class="card big-card text-center">
					<button
						class="card-body bg-secondary-subtle border border-primary rounded title"
						on:click={() => fileInput.click()}
					>
						<i class="bi bi-upload bold-icon h1"></i>
						<p>Upload</p>
					</button>
					<input
						type="file"
						class="d-none"
						id="upload"
						on:change={(e) => upload(e)}
						bind:this={fileInput}
					/>
				</div>
			</div>
			<div class="col">
				<div class="card big-card">
					<button class="card-body bg-dark-subtle border border-primary rounded title" disabled>
						<div class="text-secondary">
							<i class="bi bi-dropbox h1"></i>
							<p>Cloud</p>
						</div></button
					>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.big-card {
		height: 200px;
	}
	.card-body:hover:not([disabled]) {
		background-color: var(--bs-primary-bg-subtle) !important;
	}
	.bold-icon {
		-webkit-text-stroke: 1px;
	}
</style>
