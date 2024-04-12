<script>
    export let inputValue;
    export let addTodo;
    export let handleKeyUp;
</script>
  
<div>
    <input type="text" placeholder="할일을 입력하쇼" bind:value={inputValue} on:keyup={e => handleKeyUp(e)}/>
    <button on:click={addTodo}>ADD</button>
</div>