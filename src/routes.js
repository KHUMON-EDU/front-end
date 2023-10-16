import LoginPage from "./route/LoginPage.svelte";
import MainPage from "./route/MainPage.svelte";
import OauthLogin from "./OauthLogin.svelte";
import LogOut from "./route/LogOut.svelte"
import Upload from "./route/Upload.svelte"

export default {
    "/": LoginPage,
    "/main_page":MainPage,
    "/oauth2/login" : OauthLogin,
    "/logout" : LogOut,
    "/upload" : Upload
};