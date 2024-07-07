// Viewer template function
function viewerTemplate(pic, alt) {
  return `<div class="viewer show">
    <span class="close-viewer">X</span>
    <img src="${pic}" alt="${alt}">
    </div>`;
}

// Function to handle image click event
function viewHandler(event) {
  const clickedElement = event.target;
  if (clickedElement.tagName === "IMG") {
      const imageNameParts = clickedElement.src.split("-"); // Split on dash
      const imagePath = imageNameParts[0];
      const modalHTML = viewerTemplate(`${imagePath}-full.jpeg`, clickedElement.alt); // Use the full image instead of the small image
      document.body.insertAdjacentHTML("afterbegin", modalHTML);
      const closeButton = document.querySelector(".close-viewer");
      closeButton.addEventListener("click", closeViewer);
  }
}

// Function to close the viewer
function closeViewer() {
  const viewer = document.querySelector(".viewer");
  viewer.remove(); // Remove the viewer element
}

// Event listener for image click
const gallery = document.querySelector(".gallery");
gallery.addEventListener("click", viewHandler);

// Handle window resize to adjust menu visibility
function handleResize() {
  const menu = document.querySelector("nav ul");
  const menuButton = document.querySelector("#menu-button");
  if (window.innerWidth > 1000) {
      menu.classList.remove("hide");
      menuButton.classList.add("hide");
  } else {
      menu.classList.add("hide");
      menuButton.classList.remove("hide");
  }
}

handleResize();
window.addEventListener("resize", handleResize);

// Toggle menu visibility on menu button click
const menuButton = document.querySelector("#menu-button");
const menu = document.querySelector("nav ul");

function toggleMenu() {
  menu.classList.toggle("hide"); // Toggle the 'hide' class to show/hide the menu
}

menuButton.addEventListener("click", toggleMenu);
