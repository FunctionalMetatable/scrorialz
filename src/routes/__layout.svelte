<script lang="ts">
    import '../app.css';
    import Navbar from "$lib/components/Navbar.svelte"
</script>
<div>
    <Navbar />
    <div class="main-page">
        <slot />
    </div>
</div>
<style>
    .main-page {
        margin-top: 50px;
    }
</style>