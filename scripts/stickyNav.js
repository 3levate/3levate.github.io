const navListNormalDistanceToTopOfViewport =
  document.getElementById("nav-list").getBoundingClientRect().top + window.scrollY;

function stickyNav() {
  const navList = document.getElementById("nav-list");
  const smallerWidthsQuery = window.matchMedia("(max-width: 1280px)");

  if (window.scrollY >= navListNormalDistanceToTopOfViewport && smallerWidthsQuery.matches) {
    navList.style.position = "fixed";

    if (!document.getElementById("placeholder")) {
      const placeholder = document.createElement("div");
      placeholder.setAttribute("id", "placeholder");
      placeholder.style.height = `${navList.offsetHeight}px`;
      navList.parentNode.insertBefore(placeholder, navList);
    }
  } else {
    navList.style.position = "static";
    const placeholder = document.getElementById("placeholder");
    if (placeholder) placeholder.remove();
  }
}

stickyNav();
document.addEventListener("scroll", stickyNav);
