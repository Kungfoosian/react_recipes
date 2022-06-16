import React, { useEffect, useState } from 'react';
import './5.2.ToastNotification.css';
import warningLogo from './img-placeholder/warning.png';


export default function ToastNotification(props) {
  const { toastList, delay } = props;
  const [list, setList] = useState(toastList);
  
  useEffect(() => {
    setList([...toastList]);
  },[toastList])
  
  useEffect(() => {
    let intervalID = setInterval(() => {
      if( list.length) {
        deleteToast(list[0].id);
      }
    }, delay);
    
    return () => clearInterval(intervalID);
  }, [list, delay])
  
  const deleteToast = id => {
    let toastIndexFound = toastList.findIndex(toast => toast.id === id);
    
    if (toastIndexFound < 0) return;

    list.splice(toastIndexFound, 1);
    toastList.splice(toastIndexFound, 1);

    setList([...list]);
  }

  return (
    <div className='toaster-container'>
      {toastList.map(toast => {
        return (
          <div key={toast.id} id={toast.id} className='notification-container'>
            <img className='notification-image' src={warningLogo} alt='warning' />

            <div className='notification-container'>
              <p className='notification-title'>{toast.type}</p>
              <p className='notification-message'>{toast.message}</p>
            </div> 

            <button onClick={() => deleteToast(toast.id)}>&times;</button>
          </div>
        )
      })}
    </div>
  )
}