<script>
  export let data;

  const { content } = data;

  import Body from "../lib/Body/Body.svelte";
  import Page from "../lib/Page/Page.svelte";
  import Header from "../lib/Text/Header.svelte";
  import Paragraph from "../lib/Text/Paragraph.svelte";
  import Work from "../lib/Work/Work.svelte";
</script>

<div class="page-wrap">
  <section class="about">
    <div class="about-inner">
      <Header>{content.title}</Header>
      <Body body={content.body}></Body>
    </div>
  </section>

  <section class="work">
    <Header>Selected work</Header>
    <div class="work-list">
      {#each content.work as work}
        <Work {...work} />
      {/each}
    </div>

    <Paragraph text={content.readMore}></Paragraph>
  </section>
</div>

<style>
  .work-list {
    margin-bottom: 35px;
  }

  .work {
    padding-bottom: 40px;
  }

  .page-wrap {
    max-width: 1200px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 90px;
    margin: auto;
    width: calc(100vw - 40px);
  }

  .about-inner {
    position: sticky;
    top: 40px;
  }

  .work {
    grid-column-start: 2;
    grid-column-end: 4;
  }

  :global(a) {
    color: black;
  }

  :global(body) {
    background-color: #f5f5ef;
  }

  @media (max-width: 800px) {
    .page-wrap {
      display: block;
    }
  }
</style>
