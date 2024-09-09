import React, { useRef } from 'react'
import '../styles/TourGuid.css'
import { X } from 'lucide-react';
import TourGuidData from '../components/TourGuideData';
// import FestiveCards from './FestiveCards';

function TourGuid({onclose}) {
    const modalRef = useRef();

    const closeModal = (e) =>{
        if(modalRef.current === e.target) {
            onclose();
        }
    }

  return (
    <div className="blur-container">
    <div ref={modalRef} onClick={closeModal} className='tour-conatiner'>
        <div className='model-box'>
            <button onClick={onclose} className='close-btn'><X size={30}/></button>
            <div className='text-container'>
               
                <h1>Best Tour Guide's For You</h1>
                </div>
                <TourGuidData />
            
        </div>
        </div>
        </div>
  )
}

export default TourGuid;