const express = require('express');
const recipes = require('../controller/recipeController');

const recipeRoute = express.Router();

recipeRoute.get('/recipies', recipes.getAllRecipes);
recipeRoute.get('/recipes/:id', recipes.getSingleRecipe);
recipeRoute.post('/recipes', recipes.addRecipe);
recipeRoute.put('/recipes/:id', recipes.modifyRecipe);
recipeRoute.delete('/recipes/:id', recipes.deleteRecipe);

module.exports = recipeRoute;