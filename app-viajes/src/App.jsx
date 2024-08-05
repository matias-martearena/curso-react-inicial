import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './components/home/Home'
import CityList from './components/city-list/CityList'

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/city-list" element={<CityList />} />
            </Routes>
        </Router>
    )
}

export default App
