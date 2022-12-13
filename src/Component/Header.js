import React, { createContext, useState } from "react";
import "../Component/Weather.css";
import Cities from "./Cities";
import Sidebar from "./Sidebar";
const details = createContext();

const Header = () => {
  const city = [
    {
      id: 0,
      name: "Bangalore/Bengaluru",
      deg: "20°C",
    },
    {
      id: 1,
      name: "Pune",
      deg: "20°C",
    },
    {
      id: 2,
      name: "Mumbai",
      deg: "20°C",
    },
    {
      id: 3,
      name: "Kolkata",
      deg: "20°C",
    },
    {
      id: 4,
      name: "Patna",
      deg: "20°C",
    },
    {
      id: 5,
      name: "Delhi",
      deg: "20°C",
    },
    {
      id: 6,
      name: "Chennai",
      deg: "20°C",
    },
    {
      id: 7,
      name: "Hyderbad",
      deg: "20°C",
    },
    {
      id: 8,
      name: "Rajasthan",
      deg: "20°C",
    },
    {
      id: 9,
      name: "Kerala",
      deg: "20°C",
    },
    {
      id: 10,
      name: "punjab",
      deg: "20°C",
    },
  ];
  const [search, setsearch] = useState("");
  const [data, setdata] = useState(city);

  const[myvalue,setmyvalue]=useState([])

  const handleAdd = (id) => {
    const removed = data.filter((val) => {
      return val.id !== id;
    });
    setdata(removed);

    const newcity = data.filter((val) => {
      return val.id === id;
    });

    // setmyvalue(...myvalue,newcity)
    console.log(newcity)


    // return newcity;
  };
  return (
    <>
      <details.Provider value={[myvalue]}>
        <Cities />
      </details.Provider>
      <div className="citynames">
        <div className="citymodal">
          <h1> Add City Modal</h1>
          <input
            type="text"
            placeholder="search here"
            value={search}
            onChange={(e) => setsearch(e.target.value)}
          />
          <br />
          <br />
        </div>
        <div className="cityval">
          {data
            .filter((val) => {
              if (search === "") {
                return val;
              } else if (
                val.name.toLowerCase().includes(search.toLowerCase())
              ) {
                return val.name;
              }
            })
            .map((elem) => {
              return (
                <div key={elem.id}>
                  <ul>
                    <p className="elemname">
                      {elem.name}
                      <button
                        className="citybtn"
                        onClick={() => handleAdd(elem.id)}
                      >
                        Add
                      </button>
                    </p>
                  </ul>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Header;
export { details };
