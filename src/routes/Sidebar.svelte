<script>
</script>

<div class="d-flex flex-sm-column flex-row flex-nowrap sticky-top py-3 pe-3 border-end">
	<a
		href="https://github.com/yz-dev21/poly-todo"
		class="align-items-center link-dark text-decoration-none ps-3"
		><i class="bi bi-github h4"></i><span class="m-2 h4"><strong>POLY-TODO</strong></span>
	</a>
	<hr />
	<ul class="nav nav-pills nav-fill flex-column mb-auto" role="tablist">
		<li class="nav-item mb-2">
			<button
				class="nav-link btn btn-light link-dark text-start"
				id="todo_nav"
				role="tab"
				data-bs-toggle="tab"
				aria-selected="true"
				data-bs-target="#todo_tab"
				><i class="bi bi-check2-square" id="bold_icon"></i><strong
					><span class="m-2">Todo</span></strong
				>
			</button>
		</li>
		<li class="nav-item mb-2">
			<button
				class="nav-link btn btn-light link-dark w-100 text-start"
				id="poly_nav"
				role="tab"
				data-bs-toggle="tab"
				aria-selected="false"
				data-bs-target="#poly_tab"
				><i class="bi bi-bounding-box" id="bold_icon"></i><strong
					><span class="m-2">Poly</span></strong
				></button
			>
		</li>
		<li class="nav-item mb-2">
			<button
				class="nav-link btn btn-light link-dark w-100 text-start"
				id="settings_nav"
				role="tab"
				data-bs-toggle="tab"
				aria-selected="false"
				data-bs-target="#settings_tab"
				><i class="bi bi-gear-wide-connected" id="bold_icon"></i><strong
					><span class="m-2">Settings</span></strong
				></button
			>
		</li>
	</ul>
</div>
<div class="tab-content">
	<div
		class="tab-pane fade show active"
		id="todo_tab"
		role="tabpanel"
		aria-labelledby="todo_nav"
		tabindex="0"
	>
		<h1>todo</h1>
	</div>
	<div class="tab-pane fade" id="poly-tab" role="tabpanel" aria-labelledby="poly_nav" tabindex="0">
		<h1>poly</h1>
	</div>
	<div
		class="tab-pane fade"
		id="settings_tab"
		role="tabpanel"
		aria-labelledby="settings_nav"
		tabindex="0"
	>
		<h1>settings</h1>
	</div>
</div>

<style>
	button[aria-selected='true'] {
		background-color: var(--bs-danger);
	}
	#bold_icon {
		-webkit-text-stroke-width: 0.5px;
	}
</style>
