<script lang="ts">
    import UserInterface from "$lib/components/UserInterface.svelte";
    import { createScene } from "$lib/graphics/defaultScene";
    import { onMount } from "svelte";

    let el: HTMLCanvasElement;

    let showParts: boolean = false;

    onMount(() => {
        createScene(el);
    });
</script>

<canvas class="absolute top-0 left-0 z-0" bind:this={el} />

<div class="overflow-y-hidden w-screen h-screen">
    <div class="flex absolute top-0 left-0 z-50 flex-col p-1 space-y-1 w-full h-fit">
        <div class="flex flex-row space-x-2 w-full h-fit">
            {#if showParts}
                <button on:click={() => {showParts = !showParts}} class="p-1 bg-white border border-black shadow-inner shadow-black">
                    Show Parts
                </button>
            {:else}
                <button on:click={() => {showParts = !showParts}} class="p-1 bg-white border border-black">
                    Show Parts
                </button>
            {/if}
        </div>
        {#if showParts}
            <UserInterface />
        {/if}
    </div>
</div>
