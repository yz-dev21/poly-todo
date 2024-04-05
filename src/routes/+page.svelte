<script>
    import Sidebar from "./Sidebar.svelte";
</script>

<div class="container-fluid">
    <div class="row flex-nowrap">
        <div class="col-auto col-sm-1 px-0" id="indigo_subtle">
            <div class="d-flex flex-column flex-shrink-0" id="sidebar_parent">
                <Sidebar />
            </div>
        </div>
    </div>
</div>

<style>
    :global(body) {
        background-color: black;
    }
    #indigo_subtle {
        color: #6814f4;
    }
    #sidebar_parent {
        width: 3.5rem;
    }
</style>