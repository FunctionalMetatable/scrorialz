<script lang="ts">
    import { onMount } from "svelte";


    let xSize: number = 500
    let ySize: number = 0

    onMount(() => {
        window.addEventListener("resize", (e) => updateDimensions())

        const updateDimensions = () => {
            xSize = window.innerWidth;
            ySize = window.innerHeight
        }

        updateDimensions()
    })
    
</script>
<div id="navigation">
    <div class="inner">
        <div>
            {#if xSize < 300}
                <li class="menu">
                    <svg xmlns="http://www.w3.org/2000/svg" class="menu-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </li>
            {/if}
            <div>
                <a href="/">
                    Scrorialz
                </a>
            </div>
            <div>
                <a href="/explore">
                    Explore
                </a>
            </div>
        </div>
    </div>
</div>
<style>
    #navigation {
        display: flex;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 10;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
        background-color: #3b6ad1;
        width: 100%;
        height: 50px;
        justify-content: center;
        max-height: 50px;
    }

    .inner {
        height: 100%;
    }

    #navigation .inner > div {
        display: flex;
        flex-wrap: nowrap;
        background: #3b6ad1;
        z-index: 10;
        height: 50px;
        list-style: none;
        flex-direction: row;
        justify-content: flex-start;
        padding: 0;
        line-height: 1.5em;
        font-size: 1rem;
        font-weight: normal;
    }

    @media only screen and (min-width: 942px) {
        .inner {
            margin: 0px;
            width: 942px;
        } 
    }

    .menu-svg {
        width: 10px;
    }

    .inner > div > div {
        position: relative;
        float: left;
        margin: 0;
        height: 100%;
        -webkit-align-self: flex-start;
        -ms-flex-item-align: start;
        align-self: flex-start;
        padding: 14px 16px;
    }

    .inner > div > div {
        font-weight: 900;
    }
</style>