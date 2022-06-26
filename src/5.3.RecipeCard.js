import React from 'react';
import './5.3.RecipeCard.css';

export default function RecipeCard(props) {
  const recipeList = props.recipeList;
  const btnAction = props.btnAction;
  const clearResults = props.clearResults;
  const refreshResults = props.refreshResults;

  return (
    <div className='recipe-card-container'>

      <div className='grid-content-section'>
        {recipeList.map(recipe => {
          let ingredients = '';

          for(let i = 1; i < 21; i++) {
            let currentIngredient = recipe[`strIngredient${i}`]; 
            let nextIngredient = recipe[`strIngredient${i + 1}`]; 

            ingredients += currentIngredient;

            if(nextIngredient === '') break ;
            else ingredients += ', ';
          }

          return (
              <div key={`item-container-${recipe.idMeal}`} className="item-container" >
                <img alt={recipe.strMeal} src={recipe.strMealThumb}/>

                <p className='recipe-name'>{recipe.strMeal}</p>
              </div>
          )
        })}
      </div>
      
      {btnAction === 'remove' ?
        <button className='remove' onClick={clearResults}>Clear Results</button>
        : <button className='refresh' onClick={refreshResults}>Refresh</button>
      }
    </div>
  )
}