import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Component/Weather.css";

const Sidebar = () => {
  const [active, setactive] = useState(true);
  const navigate = useNavigate();

  const handlecity = () => {
    setactive(false);
    navigate('/Cities')
  };
  const handlehome = () => {
    setactive(false);
    navigate('/')
  };
  const addCity=()=>{
     navigate('/Header')
  }

  return (
    <>
      <div className="container">
        <p className={active ? "home" : "home2"} onClick={handlehome}>
          Home
        </p>
        <p className={active ? "cities" : "cities2"} onClick={handlecity}>
          cities
        </p>
    
      </div>
      <div className="head">
        <h3>My favorite cities</h3>
        <p className="notselected">
          You have not selected any city as favorites
        </p>
        <button  className="button" onClick={addCity}>Add New Cities</button>
        
      </div>
    </>
  );
};

export default Sidebar;
