import React from 'react'
import './CitiesModal.css'

function CitiesModal({setShowModal}) {
    const handleClick = () =>{
        setShowModal(false)
    }
    
  return (
    <div className='city-modal'>
        <div className='city-modal-header'>
            <h5>Add City Modal</h5>
            <button onClick={handleClick}>X</button>
        </div>
    </div>
  )
}

export default CitiesModal