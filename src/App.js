import "./App.scss"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Appheader from "./components/header/Appheader"
import { Footer } from "./components/footer/Footer"
import LandingPage from "./pages/landingPage/LandingPage"
import News from "./pages/News/News"
import Videos from "./pages/Videos/Videos"
import Vehicles from "./pages/Vehicles/Vehicles"
import LifeStyle from "./pages/LifeStyle/LifeStyle"
import VehicleDetails from "./pages/Vehicles/Details/VehicleDetails"
<<<<<<< HEAD
import Sport from "./pages/sports/Sport"
=======
import Meuseum from "./pages/Meuseum/Meuseum"
>>>>>>> 4b0f4764bd07f5ca6aedf98b33a6809d5d84cb20

function App() {
  return (
    <div className="main-div">
      <Router>
        <Appheader />
        <Routes>
          <Route exact path='/' element={<LandingPage />}></Route>
          <Route exact path='/marcedes/news' element={<News />}></Route>
          <Route exact path='/marcedes/videos' element={<Videos />}></Route>
          <Route exact path='/marcedes/vehicles' element={<Vehicles />}></Route>
          <Route exact path='/marcedes/vehicles/:id' element={<VehicleDetails />}></Route>
          <Route exact path='/marcedes/life-style' element={<LifeStyle />}></Route>
<<<<<<< HEAD
          <Route exact path='/marcedes/sports' element={<Sport />}></Route>
=======
          <Route exact path='/marcedes/museum' element={<Meuseum />}></Route>
>>>>>>> 4b0f4764bd07f5ca6aedf98b33a6809d5d84cb20
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
