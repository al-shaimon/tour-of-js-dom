const sections = document.querySelectorAll("section");
for (const section of sections) {
  section.style.border = "2px solid red";
  section.style.marginBottom = "10px";
  section.style.borderRadius = "8px";
  section.style.paddingLeft = "10px";
  section.style.marginLeft = "5px";
  section.style.marginRight = "5px";
  section.style.backgroundColor = "purple";
}

// const placesContainer = document.getElementById("places-container");
// placesContainer.style.backgroundColor = "yellow";

const placeContainer = document.getElementById("places-container");
placeContainer.classList.add("text-center");
placeContainer.classList.remove("large-text");
