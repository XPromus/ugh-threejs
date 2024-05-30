<script lang="ts">
    import { loadFbxHouse, loadFbxOutside } from "$lib/graphics/loader/fbxLoader";
    import { sceneStore } from "$lib/data/threeStore";
    import { houseChildrenNameStore } from "$lib/data/houseStore";

    let inputValue: string = "";

    const loadModelButtonClicked = () => {
        loadFbxHouse($sceneStore);
        loadFbxOutside($sceneStore);
    }
</script>

<div class="flex overflow-x-scroll flex-row p-2 space-x-2 w-full h-full bg-white">
    <!--
    <div class="flex flex-row p-2 space-x-2 w-full">
        <input bind:value={inputValue} class="p-2 rounded-md grow" type="text" placeholder="FBX Model Path">
        <button on:click={loadModelButtonClicked} class="py-2 px-6 bg-green-400 rounded-md">
            Load
        </button>
    </div>
    -->
    {#each $houseChildrenNameStore as child}
        <span>{child}</span>
    {/each}
</div>
