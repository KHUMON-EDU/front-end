<script>
import {location, querystring} from 'svelte-spa-router'
console.log("XXXXXXXXXXXXXXXX")


let searchParams = new URLSearchParams($querystring);

</script>


<p style="color: black;">{searchParams.get("id")}</p>
<p style="color: black;">{searchParams.get("access-code")}</p>
<p style="color: black;">{searchParams.get("nickname")}</p>