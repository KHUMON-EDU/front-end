<script>
import {location, querystring} from 'svelte-spa-router'
import MainPage from './route/MainPage.svelte';
console.log($querystring)



let searchParams = new URLSearchParams($querystring);
console.log(searchParams.get("nickname"))
history.pushState(null, null, "/")
sessionStorage.setItem("id",searchParams.get("id"))
sessionStorage.setItem("access-code",searchParams.get("access-code"))
sessionStorage.setItem("nickName",searchParams.get("nickname"))
</script>


<MainPage  />

