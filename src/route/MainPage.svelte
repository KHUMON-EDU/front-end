<script>
    import LoginPage from "./LoginPage.svelte";

    let id = sessionStorage.getItem("id")
    let accessCode = sessionStorage.getItem("access-code")
    let nickName = sessionStorage.getItem("nickName")

</script>

{#if accessCode}
<div style="align-items:end;">
    <p style="color: black; align-items:end">{nickName} 님 안녕하세요.      <a href="#/logout">로그아웃</a></p>
</div>

<div style="align-items: center; display:flex">

    <div style="height:max-content; margin-bottom:10%">
    <img src="images/khu_mon_logo.png" alt="logo" width="100%" style=" margin-bottom: 5%;float: left; width:100%; height:auto; align-items: center; display: flex;" >
    </div>

    <div style="float: left; width:50%">
    <a href="#/upload" style="width: fit-content; height:fit-content">
    <img src="images/add_study_button.png" alt="logo" width="100%" style=" margin-bottom: 5%;">
    </a>

    <a  href = "#/note">
        <img src="images/note_button.png" alt="logo" width="100%" style=" margin-bottom: 5%;">
    </a>
    </div>


</div>

{:else}
    <LoginPage />


{/if}