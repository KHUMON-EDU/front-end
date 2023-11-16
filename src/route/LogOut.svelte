<script>
    import LoginPage from "./LoginPage.svelte";
    import axios from 'axios'
    let header = sessionStorage.getItem("access-code")
    axios.get("https://khumon-edu.kro.kr/api/auth/logout",{
        headers:{"Authorization":"Bearer " + header},
      }).then(
        response => console.log(response)
      )
    sessionStorage.clear()
    history.pushState(null, null, "/")
</script>

<LoginPage/>
