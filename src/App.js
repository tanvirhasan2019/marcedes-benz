import "./App.scss"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Appheader from "./components/header/Appheader"
import { Footer } from "./components/footer/Footer"
import LandingPage from "./pages/landingPage/LandingPage"
import News from "./pages/News/News"
import Videos from "./pages/Videos/Videos"
import Vehicles from "./pages/Vehicles/Vehicles"
import Meuseum from "./pages/Meuseum/Meuseum"
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
          <Route exact path='/marcedes/museum' element={<Meuseum />}></Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
