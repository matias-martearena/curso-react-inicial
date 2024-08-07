import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import FormComments from '../comment/FormComments'
import './cityItem.css'

const CityItem = ({ arrCity }) => {
    const { id } = useParams()
    const city = arrCity.filter(city => city.id === parseInt(id))

    return (
        <section>
            <Header />
            {city.map(city => (
                <div key={city.id}>
                    <h1>{city.nombre}</h1>
                    <p>{city.descripcion}</p>
                    <picture>
                        {city.imagenes.map(img => (
                            <img key={img.id} src={img.url} alt={`Foto con id: ${img.id}`} />
                        ))}
                    </picture>
                    <h2>Puntos de interes</h2>
                    <picture>
                        {city.puntosInteres.map(pi => (
                            <article key={pi.id}>
                                <h3>{pi.nombre}</h3>
                                <p>{pi.descripcion}</p>
                                <img src={pi.url} alt={`Punto de interes con id: ${pi.id}`} />
                            </article>
                        ))}
                    </picture>
                </div>
            ))}
            <FormComments ciudad={city} />
            <Footer />
        </section>
    )
}

CityItem.propTypes = {
    arrCity: PropTypes.array.isRequired
}

export default CityItem
