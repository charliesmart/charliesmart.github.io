<script>
    import { getContext } from 'svelte'; 

    const setCurrentHover = getContext('setCurrentHover');

    export let href = "";
    export let image = "";

</script>

<a class="link-span" target="_blank" {href} on:mouseenter="{() => setCurrentHover(image)}" on:mouseleave="{() => setCurrentHover(null)}">
    <slot></slot>
</a>

<style type="scss">
    .link-span {
        color: blue;
        font-style: italic;
        text-decoration: none;
        position: relative;
    }

    

    @media (min-width: 701px) {
        .link-span:hover {
            font-family: acumin-pro-extra-condensed, sans-serif;
            font-size: 41px;
            font-weight: 900;
            line-height: 44px;
            letter-spacing: 0.5px;
            text-decoration: underline;
        }
    }
</style>