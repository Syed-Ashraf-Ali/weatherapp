import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cities from './Component/Cities.js'
import Header from './Component/Header.js'
import Sidebar from './Component/Sidebar.js'


function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route path="/"  element={<Sidebar/>}/>
          <Route path="/Header" element={<Header />} />
          <Route path="/Cities" element={<Cities/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
