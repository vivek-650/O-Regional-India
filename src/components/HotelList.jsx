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
               
                <h1>Best Hotel's For You</h1>
                
                <div className="text-box">
                <h3>AMIT KI HAWALI</h3>
                <h5>Contact:754298354</h5>
                <h3>MAAN KA CUTE COTTAGE</h3>
                <h5>Contact:754298354</h5>
                <h3>SATENDRA KA KILA</h3>
                <h5>Contact:754298354</h5>
                <h3>ANAND NIWAS</h3>
                <h5>Contact:754298354</h5>
                <h3>SITESH KA JUGAD</h3>
                <h5>Contact:754298354</h5>
                

                </div>
            </div>
        </div>
        </div>
  )
}

export default TourGuid;