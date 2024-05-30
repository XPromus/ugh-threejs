<script lang="ts">
    import { loadFbxHouse, loadFbxOutside } from "$lib/graphics/loader/fbxLoader";
    import { sceneStore } from "$lib/data/threeStore";

    let inputValue: string = "";

    const loadModelButtonClicked = () => {
        loadFbxHouse($sceneStore);
        loadFbxOutside($sceneStore);
    }
</script>

<div class="w-full h-full flex flex-col">
    <div class="w-full flex flex-row space-x-2 p-2">
        <input bind:value={inputValue} class="p-2 rounded-md grow" type="text" placeholder="FBX Model Path">
        <button on:click={loadModelButtonClicked} class="bg-green-400 py-2 px-6 rounded-md">
            Load
        </button>
    </div>
</div>
