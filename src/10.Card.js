import './10.Card.css';

// In future just use the html link for food bg, these are just placeholders
import burritoBg from './img-placeholder/burrito.jpg';  
import foodBg from './img-placeholder/food-bg.jpeg';  
import hamburgerBg from './img-placeholder/hamburger.jpg';  
import tacosBg from './img-placeholder/tacos.jpg';  

function Card(props) {

  // Remove in future, these are just placeholders
  const bgLinks = [ burritoBg, foodBg, hamburgerBg, tacosBg ];

  return (
    <div className={props.className}>
      <div className='text-container' style={{
        backgroundImage: `url(${bgLinks[Math.floor(Math.random() * bgLinks.length)]})`
      }}>
        <h3 className='card-title'>Card name here</h3>
      </div>
    </div>
  )
}


export default Card;