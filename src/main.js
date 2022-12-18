import "./style.css";
/* Import af Motion One bibliotek */
import { animate, stagger, inView, scroll, timeline } from "motion";

inView(".inview", () => {
  animate(".inview", { x: [-2000, 0] }, { duration: 2 });
});

inView(".inview2", () => {
  animate(".inview2", { x: [-2000, 0] }, { duration: 4 });
});

const acceptCookie = document.querySelector("#tillad");
const denyCookie = document.querySelector("#afvis");
const cookieboks = document.querySelector("#cookieboks");

acceptCookie.addEventListener("click", fjernCookieboks);
denyCookie.addEventListener("click", fjernCookieboks);

function fjernCookieboks() {
  cookieboks.classList.add("hidden");
  sessionStorage.setItem("fjerncookieboks", true);
}

/*
if (sessionStorage.getItem("fjerncookieboks")) {
cookieboks.classList.add("hidden");}
*/
