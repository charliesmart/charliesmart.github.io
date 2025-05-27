<script>
  import Paragraph from "../Text/Paragraph.svelte";
  import Subhed from "../Text/Subhed.svelte";

  export let title;
  export let org;
  export let abstract;
  export let year;
  export let slug;
  export let banner;
  export let url;

  let video;

  function mouseEnter() {
    if (video) video.play();
  }

  function mouseLeave() {
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  }
</script>

<!--

  <div class="work-wrap" on:mouseenter={mouseEnter} on:mouseleave={mouseLeave}>
    <div class="left">
     
      <img src="/images/{banner}" />
      {/if}
    </div>
    <div class="right">
      <a target="_blank" href={url}>
        <Subhed>{title}</Subhed>
      </a>
      <h5 class="org">{org} • {year}</h5>
      <Paragraph text={abstract} />
    </div>
  </div>
-->

<a class="work-link" target="_blank" href={url}>
  <div
    class="work-section"
    on:mouseenter={mouseEnter}
    on:mouseleave={mouseLeave}
  >
    <Subhed>
      <span class="source">{org}</span>{title}</Subhed
    >

    <Paragraph text={abstract} />

    <div class="image">
      {#if banner.includes(".mp4")}
        <video loop bind:this={video} muted="true" src="/images/{banner}" />
      {/if}
    </div>
  </div>
</a>

<style>
  .image {
    position: absolute;
    width: 300px;
    left: -20px;
    transform: translateX(-100%);
    top: 36px;
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s ease;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
    padding: 0;
  }

  a {
    text-decoration: none;
  }

  a :global(h2) {
    cursor: pointer;
  }

  a:hover :global(h2) {
    text-decoration: underline;
  }

  .work-section {
    border-top: 1px solid black;
    padding: 10px 0 8px 0;
    transition: padding 0.2s ease;
    position: relative;
  }

  a.work-link:last-child .work-section {
    border-bottom: 1px solid black;
  }

  .work-section:hover .image {
    opacity: 1;
    top: 16px;
  }

  video {
    max-width: 100%;
    margin: 0;
    display: inline-block;
    vertical-align: top;
  }

  .work-section :global(p) {
    margin-top: 5px;
    margin-bottom: 5px;
  }

  .source {
    font-family: cofo-sans-mono-variable, sans-serif;
    font-size: 13px;
    float: right;
    position: relative;
    top: 9px;
  }

  @media (max-width: 650px) {
    .source {
      display: block;
      float: none;
      margin-bottom: 10px;
    }
  }
</style>
