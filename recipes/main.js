// Import recipes from recipes.mjs
import recipes from './recipes.mjs';

// Function to generate a random number
function random(num) {
    return Math.floor(Math.random() * num);
}

// Function to get a random entry from a list
function getRandomListEntry(list) {
    const randomNum = random(list.length);
    return list[randomNum];
}

// Function to generate HTML for recipe tags
function tagsTemplate(tags) {
    let html = '';
    tags.forEach(tag => {
        html += `<li>${tag}</li>`;
    });
    return html;
}

// Function to generate HTML for recipe rating stars
function ratingTemplate(rating) {
    let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            html += '<span aria-hidden="true" class="icon-star">⭐</span>';
        } else {
            html += '<span aria-hidden="true" class="icon-star-empty">☆</span>';
        }
    }
    html += '</span>';
    return html;
}

// Function to generate HTML for a recipe
function recipeTemplate(recipe) {
    return `
        <figure class="recipe">
            <img src="${recipe.image}" alt="Image of ${recipe.title}">
            <figcaption>
                <ul class="recipe__tags">
                    ${tagsTemplate(recipe.tags)}
                </ul>
                <h2><a href="#">${recipe.title}</a></h2>
                <p class="recipe__ratings">
                    ${ratingTemplate(recipe.rating)}
                </p>
                <p class="recipe__description">
                    ${recipe.description}
                </p>
            </figcaption>
        </figure>
    `;
}

// Function to render recipes to the page
function renderRecipes(recipeList) {
    const recipesContainer = document.getElementById('recipes');
    recipesContainer.innerHTML = recipeList.map(recipe => recipeTemplate(recipe)).join('');
}

// Function to initialize the page with a random recipe
function init() {
    const randomRecipe = getRandomListEntry(recipes);
    renderRecipes([randomRecipe]);
}

// Initialize the page
init();

// Event listener for the search form
document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const filteredRecipes = filterRecipes(searchInput);
    renderRecipes(filteredRecipes);
});

// Function to filter recipes based on search query
function filterRecipes(query) {
    return recipes.filter(recipe => {
        const nameMatch = recipe.title.toLowerCase().includes(query);
        const descriptionMatch = recipe.description.toLowerCase().includes(query);
        const tagMatch = recipe.tags.find(tag => tag.toLowerCase().includes(query));
        return nameMatch || descriptionMatch || tagMatch;
    }).sort((a, b) => a.title.localeCompare(b.title));
}
