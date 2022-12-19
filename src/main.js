import "./style.css";
/* Import af Motion One bibliotek */
import { animate, inView } from "motion";

inView(".inview", () => {
  animate(".inview", { x: [-2000, 0] }, { duration: 2 });
});

inView(".inview2", () => {
  animate(".inview2", { x: [-2000, 0] }, { duration: 4 });
});

inView(".inviewbillede", () => {
  animate(".inviewbillede", { x: [2000, 0] }, { duration: 4 });
});

animate(
  ".mereanimate",
  { opacity: [0, 1, 0.2, 0.8], scale: [0.95, 1, 0.7, 0.9] },
  { delay: 3, duration: 4, direction: "alternate", repeat: 2 }
);

inView(".cookies", () => {
  animate(".cookies", { x: [-2000, 0] }, { duration: 10 });
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
