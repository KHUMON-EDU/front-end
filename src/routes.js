import LoginPage from "./route/LoginPage.svelte";
import MainPage from "./route/MainPage.svelte";
import OauthLogin from "./route/OauthLogin.svelte";

export default {
    "/": LoginPage,
    "/main_page":MainPage,
    "/oauth2/login" : OauthLogin
};