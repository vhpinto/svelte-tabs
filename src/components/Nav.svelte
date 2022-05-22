<script lang="ts">
    import { createEventDispatcher } from "svelte"
    export let title: string;
    export let selected: boolean;

    const dispatcher = createEventDispatcher<{selection: string}>();

    function onClick() {
        dispatcher('selection', title)
    };
</script>
  
<button
    type="button"
    class:selected={selected}
    on:click={onClick}
    >
    { title }
</button>