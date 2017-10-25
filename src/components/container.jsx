import React from 'react';
import recipes from '../../recipes.json';
import Recipe from './recipe.jsx';

function Container() {
  function getRecipes() {
    return recipes.map((recipe) => {
      return <Recipe recipe={recipe} />;
    });
  };

  return (
  	<div>
      <h1 className="recipes-title">Delicious and Quick Recipes</h1>
      <div className="recipes-grid">
        {getRecipes()}
      </div>
    </div>
  );
};

export default Container;
