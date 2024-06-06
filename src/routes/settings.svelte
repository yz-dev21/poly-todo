<script>
	import { saveAs } from 'file-saver';
	import * as ls from '../ls.js';

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

<div class="row text-center mb-4">
	<h4 class="title">Settings</h4>
</div>
<div class="row d-flex justify-content-center">
	<div class="col-md-6">
		<button class="btn btn-primary" on:click={() => download()}>download</button>

		<label class="btn btn-primary" for="upload"
			>upload
			<input type="file" class="d-none" id="upload" on:change={(e) => upload(e)} />
		</label>
	</div>
</div>
