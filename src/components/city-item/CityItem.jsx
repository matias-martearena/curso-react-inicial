import './cityItem.css'
import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types'
import Header from '../header/Header'
import FormComments from '../comment/FormComments'
import Footer from '../footer/Footer'

const CityItem = ({ cities }) => {
    const { id } = useParams()
    const city = cities.filter(city => city.id === parseInt(id))

    return (
        <section>
            <Header />
            {city.map(city => (
                <div className="city-detail-contailer" key={city.id}>
                    <h1 className="city-detail-name">{city.name}</h1>
                    <p className="city-detail-description">{city.description}</p>
                    <picture className="city-detail-img-container">
                        {city.images.map(img => (
                            <img className="city-detail-img" key={img.id} src={img.url} alt={`Foto con id: ${img.id}`} />
                        ))}
                    </picture>
                    <h2 className="city-detail-subtitle">Points of interest</h2>
                    <picture className="city-detail-img-container">
                        {city.points.map(pi => (
                            <article className="point-container" key={pi.id}>
                                <div className="point-info-container">
                                    <h3 className="point-name">{pi.name}</h3>
                                    <p className="point-description">{pi.description}</p>
                                </div>
                                <img className="point-img" src={pi.url} alt={`Point of interest with id: ${pi.id}`} />
                            </article>
                        ))}
                    </picture>
                </div>
            ))}
            <FormComments city={city} />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                    fill="#ebd5b8"
                    d="M0,128L48,117.3C96,107,192,85,288,90.7C384,96,480,128,576,122.7C672,117,768,75,864,53.3C960,32,1056,32,1152,58.7C1248,85,1344,139,1392,165.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
            </svg>
            <Footer />
        </section>
    )
}

CityItem.propTypes = {
    cities: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default CityItem
