import React, { useRef } from 'react'
import '../styles/TourGuid.css'
import { X } from 'lucide-react';

function TourGuid({onclose}) {
    const modalRef = useRef();

    const closeModal = (e) =>{
        if(modalRef.current === e.target) {
            onclose();
        }
    }

  return (
    <div ref={modalRef} onClick={closeModal} className='model-conatiner'>
        <div className='model-box'>
            <button onClick={onclose} className='close-btn'><X size={30}/></button>
            <div className='text-container'>
               
                <h1>Best Tour Guide's For You</h1>
                
                <div className="text-box">
                <h3>AMIT DEO</h3>
                <h5>Contact:754298354</h5>
                <h3>MANWHENDAR MAHTO</h3>
                <h5>Contact:754298354</h5>
                <h3>SATENDRA KUMAR</h3>
                <h5>Contact:754298354</h5>
                <h3>VIVEK ANAND</h3>
                <h5>Contact:754298354</h5>
                <h3>SITESH KUMAR</h3>
                <h5>Contact:754298354</h5>
                

                </div>
            </div>
        </div>
        </div>
  )
}

export default TourGuid;