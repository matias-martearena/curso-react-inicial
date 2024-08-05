import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './components/home/Home'
import CityList from './components/city-list/CityList'
import CityItem from './components/city-item/CityItem'

import city from './database/city.json'

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/city-list" element={<CityList arrCity={city} />} />
                <Route path="/city-list/:id" element={<CityItem arrCity={city} />} />
            </Routes>
        </Router>
    )
}

export default App
