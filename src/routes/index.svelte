<script>
    import { setContext } from 'svelte'; 
    import HomePage from '../md/home.md';


    let currentHover = null;

    function setCurrentHover(hover) {
        currentHover = hover;
    } 

    setContext('setCurrentHover', setCurrentHover);
</script>

{#if currentHover}
    <img src="static/{currentHover}" class="display-image"/>
{/if}

<div class="text-wrap" class:hovering="{currentHover !== null}">
    <HomePage {setCurrentHover}/>
</div>


<style>
    :global(p) {
        font-family: freight-big-pro, serif;
        font-weight: 300;
        font-style: normal;
        font-size: 44px;
        margin-top: 0;
        margin-bottom: 26px;
        line-height: 54px;
    }

    :global(body) {
        background-color: #f7f7f7;
        padding: 20px;
    }
    
    .text-wrap {
        max-width: 900px;
        z-index: 99;
        position: relative;
    }

    .display-image {
        max-width: min(640px, 90%);
        position: fixed;
        max-height: 70vh;
        right: 30px;
        top: 50%;
        transform: translateY(-50%)
    }

    :global(.company) {
        font-family: acumin-pro, 'Helvetica Neue', sans-serif;
        font-weight: 900;
        font-size: 37px;
    }

    @media (max-width: 700px) {
        .display-image {
            display: none;
        }    

        :global(p) {
            font-size: 30px;
            line-height: 36px;
        }

        :global(.company) {
            font-size: 25px;
        }

        :global(body) {
            padding: 15px;
        }
    }
</style>