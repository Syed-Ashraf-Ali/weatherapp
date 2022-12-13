import React from 'react'
import Sidebar from './Sidebar';
import './Cities.css';
import CitiesModal from './CitiesModal';


const  Cities = ({showModal ,setShowModal}) => {
  const handleClick = () =>{
    setShowModal(true)
}
  return (
    <div className='city'>

    <Sidebar/>
    <div className='city-container'>
        <h3 className='city-head' >Cities</h3>
        <button className='city-add-btn' onClick={handleClick}>+</button>
        <hr/>
        <p className='city-msg'>You have not selected any city.</p>
        
    </div>
    {
            showModal&&<CitiesModal setShowModal={setShowModal}/>
            

           }
    </div>
  )
}

export default Cities