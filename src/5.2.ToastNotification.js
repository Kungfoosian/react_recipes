import React, { useEffect, useState } from 'react';
import './5.2.ToastNotification.css';
import warningLogo from './img-placeholder/warning.png';


export default function ToastNotification(props) {
  let notificationList = props.list;

  return (
    <div className='toaster-container'>
      {notificationList.map( notification => {
        return (
          <React.Fragment key={`fragment-${notification.id}`}>
            <div key={notification.id} id={notification.id} className='notification-container'>
              <img className='notification-image' src={warningLogo} alt='warning' />

              <div className='notification-container'>
                <p className='notification-title'>{notification.type}</p>
                <p className='notification-message'>{notification.content}</p>
              </div> 

              <button onClick={() => props.handleRemove(notification.id, notificationList, props.updateFunction)}>&times;</button>
            </div>
          </React.Fragment>
        )
        })
      }
    </div>
  )
}