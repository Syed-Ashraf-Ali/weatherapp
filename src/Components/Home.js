import Sidebar from "./Sidebar";
import Header from "./Header";
import  "./Home.css";
import CitiesModal from "./CitiesModal";

const Home = ({showModal , setShowModal}) => {
   
    return (
        <div className="home">
           <Sidebar />
           <Header setShowModal={setShowModal}/>
           {
            showModal&&<CitiesModal setShowModal={setShowModal}/>
            

           }
        </div>
    )
}

export default Home;