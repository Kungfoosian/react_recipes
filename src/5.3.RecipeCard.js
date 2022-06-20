import React from 'react';
import './5.3.RecipeCard.css';

export default function RecipeCard(props) {
  const { list, clearResults } = props;

  const convertTime = time => {
    let newTime;

    if(time >= 60) {
      newTime = Math.floor(time / 60).toString() + ' hr';
    } else if (time > 0) {
      newTime = time.toString() + ' min';
    } else {
      newTime = 'N/A';
    }

    return newTime;
  }

  return (
    <div className='recipe-card-container'>

      <div className='grid-content-section'>
        {list.map(item => {
          let recipeTime = item.total_time_minutes || item.cook_time_minutes || item.prep_time_minutes || -1;

          recipeTime = convertTime(recipeTime);
         
          
          return (
              <div key={`item-container-${item.id}`} className="item-container" style={{backgroundImage: `url(${item.thumbnail_url})`} }>
                <div className='overlay-container'>
                  <p className='recipe-name'>{item.name}</p>
              
                  <div className='recipe-info'>
                    <p>Servings: {item.num_servings}</p>
              
                    <p>Time: {recipeTime}</p>
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