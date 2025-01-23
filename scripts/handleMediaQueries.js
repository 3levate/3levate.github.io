const maxWidthQuery = window.matchMedia("(min-width: 1281px) and (max-width: 1600px)");
const smallerWidthsQuery = window.matchMedia("(max-width: 1280px)");
const navContactClone = document.getElementById("nav-additional-info");
const newsletterClone = document.getElementById("newsletter");

function checkForMaxWidthMedia(mediaQuery) {
  const container = document.querySelector("#container");
  const steaksGallery = document.querySelector(".steaks-gallery");
  const steaksBanner = document.querySelector("#steaks-banner");
  let steaks = document.querySelector(".steaks");

  //if it is max width screen size then ensure steaks for flexbox with gallery and banner
  if (mediaQuery.matches) {
    if (!steaks) {
      steaks = document.createElement("div");
      steaks.classList.add("steaks");
      container.appendChild(steaks);
      console.log("created steaks");
    }

    if (!steaks.contains(steaksGallery) && !steaks.contains(steaksBanner)) {
      steaks.appendChild(steaksGallery);
      steaks.appendChild(steaksBanner);
      console.log("added steaks gallery and steaks-banner to steaks");
    }
  } else if (steaks) {
    container.insertBefore(steaksGallery, steaks);
    container.insertBefore(steaksBanner, steaks);
    steaks.remove();
    console.log("removed steaks");
  }
}

function checkForSmallerMedia(smallerMediaQuery) {
  const header = document.querySelector("header");
  let navContact = document.getElementById("nav-additional-info");

  if (smallerMediaQuery.matches && navContact) {
    navContact.remove();
    console.log("removed nav-additional-info");
  } else if (!navContact) {
    header.appendChild(navContactClone);
    console.log("added nav-additional-info");
  }
}

maxWidthQuery.addListener(checkForMaxWidthMedia);
smallerWidthsQuery.addListener(checkForSmallerMedia);

checkForMaxWidthMedia(maxWidthQuery);
checkForSmallerMedia(smallerWidthsQuery);
