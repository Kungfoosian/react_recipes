import React from 'react';
import './5.3.RecipeCard.css';

export default function RecipeCard(props) {
  const { list, clearResults } = props;

  return (
    <div className='recipe-card-container'>

      <div className='grid-content-section'>
        {list.map(item => {
          let ingredients = '';

          for(let i = 1; i < 21; i++) {
            let currentIngredient = item[`strIngredient${i}`]; 
            let nextIngredient = item[`strIngredient${i + 1}`]; 

            ingredients += currentIngredient;

            if(nextIngredient === '') break ;
            else ingredients += ', ';
          }

          return (
              <div key={`item-container-${item.idMeal}`} className="item-container" style={{backgroundImage: `url(${item.strMealThumb})`} }>
                <div className='overlay-container'>
                  <p className='recipe-name'>{item.strMeal}</p>
              
                  <div className='recipe-info'>
                    <p>Ingredients: {ingredients}</p>
                    <p>Category: {item.strCategory}</p>
                  </div>
                </div>
              </div>
          )
        })}
      </div>

      <button className='remove' onClick={clearResults}>Clear Results</button>
    </div>
  )
}