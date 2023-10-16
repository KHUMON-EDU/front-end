<script>
    import LoginPage from "./LoginPage.svelte";

    sessionStorage.clear()
    history.pushState(null, null, "/")
</script>

<LoginPage/>
