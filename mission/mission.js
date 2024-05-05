// Select elements from the DOM
const selectElement = document.querySelector('select'); // selects the dropdown menu
const bodyElement = document.querySelector('body'); // selects the <body> element
const logoImage = document.querySelector('.logo'); // selects the logo image

// Define the changeTheme function
function changeTheme() {
    // Check what option is currently selected
    const selectedOption = selectElement.value;

    if (selectedOption === 'dark') {
        // If "dark" is selected, add the dark class to body and change the logo
        bodyElement.classList.add('dark');
        logoImage.src = 'byui-logo_white.png'; // replace with actual path to your white logo image
    } else {
        // If "light" is selected, remove the dark class from body and change the logo
        bodyElement.classList.remove('dark');
        logoImage.src = 'byui-logo_blue.webp'; // replace with actual path to your blue logo image
    }
}

// Add an event listener to the select element
selectElement.addEventListener('change', changeTheme);
