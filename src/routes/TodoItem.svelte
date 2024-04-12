<script>
    export let todo;
    export let deleteTodo;
</script>

<div>
    <input type="checkbox" name={todo.name} bind:checked={todo.completed} on:click={() => console.log(todo.completed)}/>
    <!-- console.log for debug! -->
    <label for={todo.name}>{todo.name}</label>
    <button on:click={ () => deleteTodo(todo) }>X</button>
</div>

<!-- ❌ -->
