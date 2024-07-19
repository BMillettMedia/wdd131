// Array of images for the pop-up ad
const images = [
  { src: 'image/ad1.png', alt: 'Ad 1' },
  { src: 'image/ad2.png', alt: 'Ad 2' },
  { src: 'image/ad3.png', alt: 'Ad 3' }
];

// Function to randomly launch a pop-up ad
function launchRandomPopup() {
  const chance = Math.random(); // Random number between 0 and 1

  // Determine the action based on the random number
  if (chance < 0.1) {
    return; // 10% chance of no pop-up
  } else if (chance < 0.4) {
    displayPopup(images[0]); // 30% chance for ad 1
  } else if (chance < 0.7) {
    displayPopup(images[1]); // 30% chance for ad 2
  } else {
    displayPopup(images[2]); // 30% chance for ad 3
  }
}

// Function to create and display the pop-up
function displayPopup(selectedImage) {
  // Create and display the pop-up
  const popupHTML = `
    <div class="popup-ad">
      <span class="close-popup">X</span>
      <img src="${selectedImage.src}" alt="${selectedImage.alt}">
    </div>`;
  document.body.insertAdjacentHTML("afterbegin", popupHTML);

  // Add event listener to close the pop-up
  document.querySelector(".close-popup").addEventListener("click", closePopup);
}

// Function to close the pop-up
function closePopup() {
  const popup = document.querySelector(".popup-ad");
  if (popup) {
    popup.remove(); // Remove the pop-up element
  }
}

// Call the function to launch the pop-up ad
launchRandomPopup();
