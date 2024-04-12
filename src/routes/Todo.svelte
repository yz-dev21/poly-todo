<script>
    import TodoItem from "./TodoItem.svelte";
    export let todoList;
</script>

<div class="todo-container">
    <div class="todo-input">
        <input />
    </div>
    <div class="todo-display">
        {#each todoList as todo }
            <TodoItem {todo}/>
        {/each}
    </div>
</div>  