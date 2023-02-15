
function validateForm() {

    var x = document.getElementById('recipeName').value;
    if (x == "") {
        alert("Az étel neve megadása kötelező.");
        return false;
    }

    var y = document.getElementById('recipeImage').value;
    if (y == "") {
        alert("Kérem adjon meg egy képet az ételről.");
        return false;
    }

    var z = document.getElementById('recipeIngredients').value;
    if (z == "") {
        alert("Kérem adjon meg hozzávalókat az ételhez.");
        return false;
    }

    var w = document.getElementById('recipeInstructions').value;
    if (w == "") {
        alert("Kérem adjon meg elkészítési instrukciókat az ételhez.");
        return false;
    }

    var recipe = {
        recipeName: x,
        recipeImage: y,
        recipeIngredients: z,
        recipeInstructions: w
    };

    var recipes = [];
    if (localStorage.getItem("recipes") !== null) {
        recipes = JSON.parse(localStorage.getItem("recipes"));
    }
    recipes.push(recipe);
    localStorage.setItem("recipes", JSON.stringify(recipes));

    alert("Az új étel sikeresen hozzáadva a receptek listájához.");

    return true;
}

function addToJsonFile() {
    if (!validateForm()) {
        return false;
    }

    var foodName = document.getElementById('recipeName').value;
    var foodImage = document.forms[0]["recipeImage"].value;
    var foodIngredients = document.forms[0]["recipeIngredients"].value;
    var foodInstructions = document.forms[0]["recipeInstructions"].value;

    var newFood = {
        name: recipeName,
        image: recipeImage,
        ingredients: recipeIngredients,
        instructions: recipeInstructions
    };

    var existingData = JSON.parse(localStorage.getItem("recipes"));
    if (existingData === null) {
        existingData = [];
    }

    existingData.push(newFood);

    localStorage.setItem("recipes", JSON.stringify(existingData));

    alert("Az új étel sikeresen hozzáadva a receptek listájához.");

    return true;
}

