<script>
    export let todo;
</script>

<div>
    <input type="checkbox" name={todo.name} />
    <label for={todo.name}>{todo.name}</label>
    <button>X</button>
</div>