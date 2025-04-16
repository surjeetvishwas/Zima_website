// Mixology Generator
document.querySelectorAll('.ingredient').forEach(button => {
    button.addEventListener('click', () => {
        const flavor = button.getAttribute('data-flavor');
        const recipeOutput = document.getElementById('recipe');
        
        recipeOutput.innerHTML = `
            <h3>Your Zima Mix:</h3>
            <p>1 can Zima + Fresh ${flavor.charAt(0).toUpperCase() + flavor.slice(1)}</p>
        `;
    });
});