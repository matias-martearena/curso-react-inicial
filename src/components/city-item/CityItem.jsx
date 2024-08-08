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
                <div key={city.id}>
                    <h1>{city.name}</h1>
                    <p>{city.description}</p>
                    <picture>
                        {city.images.map(img => (
                            <img key={img.id} src={img.url} alt={`Foto con id: ${img.id}`} />
                        ))}
                    </picture>
                    <h2>Points of interest</h2>
                    <picture>
                        {city.points.map(pi => (
                            <article key={pi.id}>
                                <h3>{pi.name}</h3>
                                <p>{pi.description}</p>
                                <img src={pi.url} alt={`Point of interest with id: ${pi.id}`} />
                            </article>
                        ))}
                    </picture>
                </div>
            ))}
            <FormComments city={city} />
            <Footer />
        </section>
    )
}

CityItem.propTypes = {
    cities: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default CityItem
