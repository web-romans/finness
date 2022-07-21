import { disableScroll } from "../functions/disable-scroll";
import { enableScroll } from "../functions/enable-scroll";

const burger = document?.querySelector("[data-burger]");
const menu = document?.querySelector("[data-menu]");

export const closeMenu = () => {
  menu?.classList.add("disable");
}

burger?.addEventListener("click", (e) => {
  burger?.classList.toggle("burger--active");
  menu?.classList.toggle("disable");
  menu?.classList.contains("disable") ? disableScroll() : enableScroll();
});




