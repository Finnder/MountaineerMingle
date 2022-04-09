import './App.css';
import InfoBlock from './components/InfoBlock/InfoBlock';
import NavTop from './components/Nav/Nav'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import BarsInfo from './components/Bars/Bars';
import FineDiningInfo from './components/FineDining/FineDining';
import HikesInfo from './components/Hikes/Hikes';
import RestaurantsInfo from './components/Restaurants/Restaurants';
import GymsInfo from './components/Gyms/Gyms'
import OutdoorInfo from './components/Outdoor/Outdoor';
import Home from './components/Home/Home';

import {Container, ListGroup} from 'react-bootstrap';
import NavBottom from './components/Nav/NavBottom';

function App() {
  return (

    <Router>
        <div className="App">

            <NavTop/>
            <Routes>

                <Route path="/home" element={<Home/>}/>
                <Route path="/bars" element={<BarsInfo/>}/>
                <Route path="/finedining" element={<FineDiningInfo/>}/>
                <Route path="/gyms" element={<GymsInfo/>}/>
                <Route path="/hikes" element={<HikesInfo/>}/>
                <Route path="/outdoor" element={<OutdoorInfo/>}/>
                <Route path="/restaurants" element={<RestaurantsInfo/>}/>

            </Routes>

            <NavBottom/>
            
        </div>
    </Router>
  );
}

export default App;
