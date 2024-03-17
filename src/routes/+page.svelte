<script lang="ts">
    import UserInterface from "$lib/components/UserInterface.svelte";
    import { createScene } from "$lib/graphics/defaultScene";
    import { onMount } from "svelte";

    let el: HTMLCanvasElement;

    onMount(() => {
        createScene(el);
    });
</script>

<div class="w-screen h-screen">
    <canvas class="z-0" bind:this={el} />
    <div class="w-full h-full z-50 top-0 left-0 absolute">
        <UserInterface />
    </div>
</div>
