import React from 'react';
import PropTypes from 'prop-types';

function Recipe({recipe}) {
  return (
    <div className="recipe-container">
      <div className="recipe">
        <div className="recipe-image-container">
          <img className="recipe-image" src={recipe.image} alt={recipe.name} key={recipe.name} />
        </div>
        <div className="recipe-summary">
          <b>{recipe.name}</b>
          <p>{recipe.headline}</p>
          <p className="recipe-details">
            <span className="recipe-calories">
              {recipe.calories}
            </span>
            <span>{recipe.time}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

Recipe.propTypes = { recipe: PropTypes.object.isRequired };

export default Recipe;
