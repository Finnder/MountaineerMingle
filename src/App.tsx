import './App.css';
import InfoBlock from './components/InfoBlock/InfoBlock';
import NavTop from './components/Nav/Nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Bars from './components/Bars/Bars';
import FineDinings from './components/FineDining/FineDining';

function App() {
  return (
    <div className="App">

        <NavTop/>
        <InfoBlock/>

        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<Bars/>} />
                    <Route path="finedining" element={<FineDinings/>} />
                    <Route path="foodplaces" element={<Foodplaces/>} />
                    <Route path="gyms" element={<Gyms/>} />
                    <Route path="hikes" element={<Hikes/>} />
                    <Route path="outdoor" element={<Outdoor/>} />
                    <Route path="restaurants" element={<Restaurants/>} />
                </Route>
            </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
