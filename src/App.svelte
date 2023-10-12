<script>
  import Router from 'svelte-spa-router'
  import Home from "./route/LoginPage.svelte";
</script>

<head>
	<meta name="color-scheme" content="light only"/>
	<meta name="supported-color-schemes" content="light"/>
</head>

<Router
  routes={{
    "/": Home,
  }}
/>

<style>

</style>
