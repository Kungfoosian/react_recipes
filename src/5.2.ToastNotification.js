import React, { useEffect, useState } from 'react';
import './5.2.ToastNotification.css';
import warningLogo from './img-placeholder/warning.png';


export default function ToastNotification(props) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let timerID = setTimeout(() => {
      setVisible(false);
      // clearTimeout(timerID);
      // props.handleRemove(props.id);
    }, props.delay);
    
    return () => clearTimeout(timerID);
  }, [props.delay])

  return (
    visible ?
      <div id={props.id} className='notification-container'>
        <img className='notification-image' src={warningLogo} alt='warning' />

        <div className='notification-container'>
          <p className='notification-title'>{props.type}</p>
          <p className='notification-message'>{props.message}</p>
        </div> 

        <button onClick={() => props.handleRemove(props.id)}>&times;</button>
      </div>
    : ''
  )
}