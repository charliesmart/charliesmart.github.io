<script>
  export let text = "";
  export let style = "";

  function formatLinks(derText) {
    derText = derText.replace(/(?:\r\n|\r|\n)/g, "<br>");
    //check for links [text](url)
    let elements = derText.match(/\[.*?\)/g);
    if (elements != null && elements.length > 0) {
      for (let el of elements) {
        let txt = el.match(/\[(.*?)\]/)[1]; //get only the txt
        let url = el.match(/\((.*?)\)/)[1]; //get only the link
        derText = derText.replace(
          el,
          '<a href="' + url + '" target="_blank">' + txt + "</a>"
        );
      }
    }

    return derText;
  }
</script>

<p class={style}>{@html formatLinks(text)}</p>

<style>
  p {
    font-family: cofo-gothic-variable, sans-serif;
    font-size: 18px;
    line-height: 1.3;
    font-variation-settings: "wght" 100;
  }

  :global(p.big) {
    font-family: "ITCGaramondLightNarrow";
    font-size: 38px;
    line-height: 1.1;
  }
</style>
