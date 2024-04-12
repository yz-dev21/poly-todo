<script>
    import TodoItem from "./TodoItem.svelte";
    export let todoList;
    export let deleteTodo;
</script>

<div class="todo-container">
    <div class="todo-display">
        {#each todoList as todo }
            <TodoItem {todo} {deleteTodo} />
        {/each}
    </div>
</div>  