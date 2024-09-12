import React, { useRef } from 'react';
import '../styles/TourGuid.css';
import { X } from 'lucide-react';
import TourGuidData from '../components/TourGuideData';

function TourGuid({ onclose }) {
    const modalRef = useRef();

    const closeModal = (e) => {
        // If you click outside the modal content, close the modal
        if (modalRef.current === e.target) {
            onclose();
        }
    };

    return (
        <div className="blur-container" ref={modalRef} onClick={closeModal}>
            <div className="tour-conatiner">
                <div className="model-box">
                    <button className="close-btn" onClick={onclose}>
                        <X size={30} />
                    </button>
                    <div className="text-container">
                        <h1>Best Tour Guide's For You</h1>
                    </div>
                    <TourGuidData />
                </div>
            </div>
        </div>
    );
}

export default TourGuid;
