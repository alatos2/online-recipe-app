const Recipe = require('../models/recipe');

const getAllRecipes = (req, res) => {
    Recipe.find()
     .then(recipes => {
         res.status(200).json(recipes);
     })
     .catch(error => {
         res.status(400).json({error: error});
     })
};

const getSingleRecipe = (req, res) => {
    Recipe.findById({_id: req.params.id})
    .then(recipe => {
        res.status(200).json(recipe);
    })
    .catch(error => {
        res.status(400).json({error: error});
    })
};

const addRecipe = (req, res) => {
    const recipe = new Recipe({
        title: req.body.title,
        ingredients: req.body.ingredients,
        instructions: req.body.instructions,
        difficulty: req.body.difficulty,
        time: req.body.time
    });

    recipe.save()
     .then(() => {
         res.status(201).json(recipe)
     })
     .catch(error => {
         res.status(400).json({ error: error});
     })
};

const modifyRecipe = (req, res) => {
    const recipe = new Recipe({
        _id: req.params.id,
        title: req.body.title,
        ingredients: req.body.ingredients,
        instructions: req.body.instructions,
        difficulty: req.body.difficulty,
        time: req.body.time
    });

    Recipe.updateOne({_id:req.params.id}, recipe)
    .then(() => {
        res.status(201).json({message: 'Successful Update!'})
    })
    .catch(error => {
        res.status(400).json({ error: error});
    })
};

const deleteRecipe = (req, res) => {
    Recipe.deleteOne({_id: req.params.id})
    .then(() => {
        res.status(200).json({message: 'deleted'});
    })
    .catch(error => {
        res.status(400).json({error: error});
    })
};

const recipes = {
    getAllRecipes, getSingleRecipe, deleteRecipe, modifyRecipe, addRecipe
}

module.exports = recipes;