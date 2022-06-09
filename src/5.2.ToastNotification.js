import { useEffect } from 'react';
import './5.2.ToastNotification.css';
import warningLogo from './img-placeholder/warning.png';


export default function ToastNotification(props) {

  return (
    <div className='toast-container show'>
      <img className='notification-image' src={warningLogo} alt='warning' />

      <div className='notification-container'>
        <p className='notification-title'>{props.type}</p>
        <p className='notification-message'>{props.message}</p>
      </div> 

      <button>&times;</button>
    </div>
  )
}