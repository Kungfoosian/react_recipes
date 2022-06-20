import './5.3.RecipeCard.css';

export default function RecipeCard(props) {
  const { list, clearResults } = props;

  return (
    <div className='recipe-card-container'>

    <div>
      {list.map(item => {
        return (
          <div key={item.id} className="item-container">
            <p>{item.name}</p>
            <p>Servings: {item.num_servings}</p>
            <p>Time: {item.total_time_minutes || item.cook_time_minutes || item.prep_time_minutes || 'N/A'}</p>
          </div>
        )
      })}
    </div>

      <button className='remove' onClick={clearResults}>Clear Results</button>
    </div>
  )
}