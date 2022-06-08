import './5.2.ToastNotification.css';
import warningLogo from './img-placeholder/warning.png';


export default function ToastNotification(props) {
  return (
    <div className='toast-container'>
      <button>&times;</button>

      {/* <div className='notification-image'></div> */}
      <img className='notification-image' src={warningLogo} alt='warning' />

      <div className='notification-container'>
        <p className='notification-title'>Title</p>
        <p className='notification-message'>Message</p>
      </div> 
    </div>
  )
}