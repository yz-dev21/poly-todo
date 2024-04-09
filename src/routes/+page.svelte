<script>
	import Sidebar from './Sidebar.svelte';
</script>

<header>
	<button class="contrast">HEADER</button>
</header>
<div class="grid">
	<Sidebar />

	<main class="container-fluid">
		<h1 class="pico-color-pink-500">Hello, World!</h1>
		<article class="pico-background-pink-600">Pink card</article>
		<blockquote>
			“Design is a funny word. Some people think design means how it looks. But of course, if you
			dig deeper, it's really how it works.”
			<footer>
				<cite>— Steve Jobs</cite>
			</footer>
		</blockquote>
	</main>
</div>
<footer>
	<button id="footer">FOOTER</button>
</footer>

<style>
	:global(body) {
		font-family: 'Pretendard', sans-serif;
	}
	:root {
		--pico-border-radius: 2rem;
		--pico-typography-spacing-vertical: 1.5rem;
		--pico-form-element-spacing-vertical: 1rem;
		--pico-form-element-spacing-horizontal: 1.25rem;
	}
	h1 {
		--pico-font-family: Pacifico, cursive;
		--pico-font-weight: 400;
		--pico-typography-spacing-vertical: 0.5rem;
	}
	button {
		--pico-font-weight: 700;
	}
	:root:not([data-theme='dark']) {
		--pico-text-selection-color: rgba(245, 107, 61, 0.1875);
		--pico-primary: #f56b3d;
		--pico-primary-background: #d24317;
		--pico-primary-underline: rgba(245, 107, 61, 0.5);
		--pico-primary-hover: #f8a283;
		--pico-primary-hover-background: #e74b1a;
		--pico-primary-focus: rgba(245, 107, 61, 0.375);
		--pico-primary-inverse: #fff;
	}
</style>
