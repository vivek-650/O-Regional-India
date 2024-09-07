import React, { useRef } from 'react'
import '../styles/PopUp.css'
import { X } from 'lucide-react';

function PopUp({onclose}) {
    const modalRef = useRef();

    const closeModal = (e) =>{
        if(modalRef.current === e.target) {
            onclose();
        }
    }

  return (
    <div ref={modalRef} onClick={closeModal} className='model'>
        <div className='model-box'>
            <button onClick={onclose} className='close-btn'><X size={30}/></button>
            <div className='container'>
               
                <img src="https://www.scrolldroll.com/wp-content/uploads/2021/09/Chole-Kulche-Indian-foods-every-foreigner-should-try-1.jpeg" alt="" />
                <div className="text-box">
                <h1>Ram ji ke Bhature</h1>
                <p>Indulge in Delhi's iconic Chole Bhature – a flavorful, spicy feast you can't miss!</p>
                <h3>Location: Rajori GArden,Delhi</h3>
                </div>
            </div>
        </div>
        </div>
  )
}

export default PopUp;