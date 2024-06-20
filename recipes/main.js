import { recipes } from './recipes.mjs';

document.addEventListener('DOMContentLoaded', () => {
    const recipesContainer = document.getElementById('recipes');

    recipes.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.className = 'recipe-card';
        recipeCard.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.title}">
            <h2>${recipe.title}</h2>
            <div class="rating" role="img" aria-label="Rating: ${recipe.rating} out of 5 stars">
                ${'⭐'.repeat(recipe.rating)}${'☆'.repeat(5 - recipe.rating)}
            </div>
            <p class="description">${recipe.description}</p>
        `;
        recipesContainer.appendChild(recipeCard);
    });
});
