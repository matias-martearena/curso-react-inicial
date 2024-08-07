import PropTypes from 'prop-types'

const Us = ({ team }) => {
    return (
        <section>
            <h2>Meet our team</h2>
            <article>
                {team.map(person => (
                    <div key={person.id}>
                        <picture>
                            <img src={person.imagen} alt={`${person.nombres} ${person.apellidos}`} />
                        </picture>
                        <p>
                            {person.nombres} {person.apellidos}
                        </p>
                        <p>{person.descripcion}</p>
                        <ul>
                            {person.stack.map(tec => (
                                <li key={tec.id}>{tec.nombre}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </article>
        </section>
    )
}

Us.propTypes = {
    team: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Us
