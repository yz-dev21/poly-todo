<script>
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