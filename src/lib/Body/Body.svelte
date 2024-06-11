<script>
  import Paragraph from "../Text/Paragraph.svelte";

  export let body;
</script>

{#each body as item}
  {#if item.type === "text"}
    <Paragraph text={item.value}></Paragraph>
  {/if}
{/each}
