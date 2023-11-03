<script>
    import LoginPage from "./LoginPage.svelte";
    import axios from 'axios'
    let header = sessionStorage.getItem("access-code")
    axios.get("http://localhost:8080/api/auth/logout",{
        headers:{"Authorization":"Bearer " + header},
      }).then(
        response => console.log(response)
      )
    sessionStorage.clear()
    history.pushState(null, null, "/")
</script>

<LoginPage/>
