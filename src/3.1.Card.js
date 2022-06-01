// import Overlay from './'
import './3.1.Card.css';


function Card(props) {
  return (
    <div className={props.className}>
      <h1 className='card-title'>Recipe name here</h1>
      <p className='card-description'>Description here...</p>
    </div>
  )
}


export default Card;