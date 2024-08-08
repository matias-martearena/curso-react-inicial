import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './components/home/Home'
import CityList from './components/city-list/CityList'
import CityItem from './components/city-item/CityItem'

import cities from './database/cities.json'
import team from './database/team.json'

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home team={team} />} />
                <Route path="/city-list" element={<CityList cities={cities} />} />
                <Route path="/city-list/:id" element={<CityItem cities={cities} />} />
            </Routes>
        </Router>
    )
}

export default App
