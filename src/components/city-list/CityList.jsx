import './cityList.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import PropTypes from 'prop-types'
import Header from '../header/Header'
import Filter from '../city-filter/Filter'
import Footer from '../footer/Footer'

const CityList = ({ cities }) => {
    const [findName, setFindName] = useState('')

    const handleFindName = e => setFindName(e.target.value)
    const filteredCities = cities.filter(city => city.name.toLowerCase().includes(findName.toLowerCase()))

    return (
        <section>
            <Header />
            <h1>Travel MA</h1>
            <Filter name={findName} onFindName={handleFindName} />
            <ul>
                {filteredCities.map(city => (
                    <Link key={city.id} to={`/city-list/${city.id}`}>
                        <li>
                            <div>
                                <p>{city.country}</p>
                            </div>
                            <h3>{city.name}</h3>
                            <p>{city.description}</p>
                        </li>
                    </Link>
                ))}
            </ul>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                    fill="#ebd5b8"
                    d="M0,128L48,117.3C96,107,192,85,288,90.7C384,96,480,128,576,122.7C672,117,768,75,864,53.3C960,32,1056,32,1152,58.7C1248,85,1344,139,1392,165.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
            </svg>
            <Footer />
        </section>
    )
}

CityList.propTypes = {
    cities: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default CityList
