import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import './cityList.css'
import Header from '../header/Header'
import Footer from '../footer/Footer'

const CityList = ({ arrCity }) => {
    return (
        <section>
            <Header />
            <h1>Travel MA</h1>
            <ul>
                {arrCity.map(city => (
                    <li key={city.id}>
                        <Link to={`/city-list/${city.id}`}>{city.nombre}</Link>
                        <p>{city.descripcion}</p>
                    </li>
                ))}
            </ul>
            <Footer />
        </section>
    )
}

CityList.propTypes = {
    arrCity: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default CityList
