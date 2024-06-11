<script>
  import { onMount } from "svelte";
  import Header from "../Text/Header.svelte";
  import Paragraph from "../Text/Paragraph.svelte";
  import { fly, slide } from "svelte/transition";
  import Subhed from "../Text/Subhed.svelte";

  export let pageData;

  let body = [];

  onMount(() => {
    body = pageData.body || [];
  });

  $: console.log(body);
</script>

<div>
  {#if pageData.title}
    <Header>{pageData.title}</Header>
  {/if}

  {#if body}
    {#each pageData.body as section, i (Math.random())}
      <div in:fly={{ x: 100, duration: 500, delay: i * 50 }}>
        {#if section.type === "text"}
          <Paragraph text={section.value} />
        {:else if section.type === "subhed"}
          <Subhed>{section.value}</Subhed>
        {:else if section.type === "big"}
          <Paragraph text={section.value} style="big" />
        {/if}
      </div>
    {/each}
  {/if}
</div>

<style>
  p {
    font-family: var(--serif);
    font-size: 24px;
  }
</style>
