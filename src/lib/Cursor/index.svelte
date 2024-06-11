<script>
  let mousePos = null;

  let cursorType = "";

  const textFields = ["H1", "H2", "H3", "H4", "H5", "H6", "SPAN", "P"];
  const pointerFields = ["A", "BUTTON"];

  function isChildOfLink(el) {
    var curNode = el;
    while (curNode) {
      if (curNode.tagName == "A") return true;
      else curNode = curNode.parentNode;
    }
    return false;
  }

  function onMouseMove(e) {
    mousePos = {
      x: e.clientX,
      y: e.clientY,
    };
  }

  function onMouseOver(e) {
    const node = e.target.nodeName;

    console.log(e.target.parentNode);

    console.log(node);

    if (isChildOfLink(e.target) || pointerFields.includes(node)) {
      cursorType = "pointer";
    } else {
      cursorType = "";
    }
  }

  function onMouseLeave() {
    mousePos = null;
  }
</script>

<svelte:document
  on:mouseover={onMouseOver}
  on:mousemove={onMouseMove}
  on:mouseleave={onMouseLeave}
/>

{#if mousePos}
  <div
    class="cursor {cursorType}"
    style="left: {mousePos.x}px; top: {mousePos.y}px;"
  />
{/if}

<style>
  .cursor {
    position: fixed;
    width: 40px;
    height: 40px;
    background-image: url("/star.svg");
    background-size: cover;
    transform: translate(-50%, -50%);
    z-index: 99999;
    pointer-events: none;
  }

  :global(.cursor.text) {
    background-color: red;
  }

  :global(.cursor.pointer) {
    width: 80px;
    height: 80px;
    margin-top: 16px;
    margin-right: 18px;
    background-image: url("/pointer.png");
  }

  :global(*) {
    cursor: none;
  }
</style>
