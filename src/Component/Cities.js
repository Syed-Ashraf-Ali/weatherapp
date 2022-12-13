import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import "../Component/Weather.css";
import Sidebar from "./Sidebar";
import { details } from "./Header";

const Cities = () => {
  const city = useContext(details);

  // console.log(city);

  return (
    <div>
      <Sidebar />
      <div className="citydisplay">
        {/* <p>Cities<NavLink to="/Header"><button className="btn">Add</button></NavLink></p><br /><hr /><br /> */}
        <p>Cities<button className="btn">Add</button></p><br /><hr /><br />
        <p>You don't have any cities</p>
      {/* {
        city.map((elem)=>{
          return(
            <div>
              <ul>
                <li>{elem.name}</li>
              </ul>
            </div>
          )
        })
      } */}
      </div>
    </div>
  );
};

export default Cities;



// {{ city }.map((elem) => {
//   return (
//     <div>
//       <p>{elem.name}</p>
//     </div>
//   );
// })}