// Array of images for the pop-up ad
const images = [
    { src: 'image/image1.jpg', alt: 'Ad 1' },
    { src: 'image/image2.jpg', alt: 'Ad 2' },
    { src: 'image/image3.jpg', alt: 'Ad 3' }
  ];
  
  // Function to randomly launch a pop-up ad
  function launchRandomPopup() {
    const chance = Math.random(); // Random number between 0 and 1
  
    // 25% chance of no pop-up, 75% chance of showing one of the images
    if (chance < 0.25) {
      return; // No pop-up
    }
  
    // Select a random image from the array
    const randomIndex = Math.floor(Math.random() * images.length);
    const selectedImage = images[randomIndex];
  
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
  
  // Launch the pop-up ad after a delay (e.g., 5 seconds)
  setTimeout(launchRandomPopup, 5000);
  