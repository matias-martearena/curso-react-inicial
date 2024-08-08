import './cityList.css'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Header from '../header/Header'
import Footer from '../footer/Footer'

const CityList = ({ cities }) => {
    return (
        <section>
            <Header />
            <h1>Travel MA</h1>
            <ul>
                {cities.map(city => (
                    <li key={city.id}>
                        <Link to={`/city-list/${city.id}`}>
                            <h3>{city.name}</h3>
                        </Link>
                        <p>{city.description}</p>
                    </li>
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
