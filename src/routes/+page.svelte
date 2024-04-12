<script>
	import Sidebar from './Sidebar.svelte';
	import Todo from './Todo.svelte';

	let inputValue = "";
	let todoList = [
		{
			id:1,
			name:"Todo #1",
			completed:false
		},
		{
			id:2,
			name:"Todo #2",
			completed:false
		},
		{
			id:3,
			name:"Todo #3",
			completed:true
		}
	];
	
	let lastId = todoList[todoList.length-1].id;

	// 할일을 추가하는 함수
	let addTodo = () => {
      if(inputValue) { // 입력한게 있으면
        let newTodo = {
          id: ++lastId,
          text: inputValue,
          completed: false
        }

        todoList[todoList.length] = newTodo;
        inputValue = "";
      }
	}
	
    // todo값을 업데이트 하면서, 엔터키를 누르면 할일이 추가되도록 하는 함수
	let handleKeyUp = e => {
		inputValue = e.target.value;
		if(e.keyCode === 13) {
			addTodo();
		}
	}

</script>



<!-- <header>
	<button class="header">HEADER</button>
</header> -->

<main class="container-fluid">
	<div class="grid">
	<!-- <Sidebar /> -->
		<Input {inputValue} {addTodo} {handleKeyUp}/>
		<Todo {todoList}/>
		<!-- <h1>Hello world</h1> -->
		
	</div>
</main>

<!-- <footer>
	<button id="footer">FOOTER</button>
</footer> -->





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
