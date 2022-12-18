import "./style.css";
/* Import af Motion One bibliotek */
import { animate, stagger, inView, scroll, timeline } from "motion";

inView(".inview", () => {
  animate(".inview", { x: [-2000, 0] }, { duration: 2 });
});

inView(".inview2", () => {
  animate(".inview2", { x: [-2000, 0] }, { duration: 4 });
});
