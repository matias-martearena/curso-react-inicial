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
            <Footer />
        </section>
    )
}

CityList.propTypes = {
    cities: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default CityList
