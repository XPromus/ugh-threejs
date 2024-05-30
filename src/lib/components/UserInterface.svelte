<script lang="ts">
    import { houseChildrenNameStore } from "$lib/data/houseStore";
</script>

<div class="flex overflow-x-scroll flex-row p-2 space-x-2 w-full h-full bg-white">
    {#each $houseChildrenNameStore as child}
        <span>{child}</span>
    {/each}
</div>
