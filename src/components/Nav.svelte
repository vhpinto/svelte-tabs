<script lang="ts">
    import { createEventDispatcher } from "svelte"
    export let title: string;
    export let selected: boolean;

    const dispatcher = createEventDispatcher<{selection: string}>();

    function onClick() {
        dispatcher('selection', title)
    };
</script>

<div class="nav">
    <span
        class:selected={selected}
        on:click={onClick}
        >
        { title }
    </span>
</div>

<style>
.nav {
    width: 60%;
    margin: 0 auto 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.nav span {
    text-decoration: none;
    width: auto;
    background-color: #053742;
    color: #e8f0f2;
    padding: 5px;
    border: 1px solid #CCCCCC;
    border-radius: 8px;
}

.nav span:hover {
    color: #008080;
    cursor: pointer;
 }

</style>