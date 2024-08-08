import PropTypes from 'prop-types'

const Team = ({ team }) => {
    return (
        <section>
            <h2>Meet our team</h2>
            <article>
                {team.map(person => (
                    <div key={person.id}>
                        <picture>
                            <img src={person.image} alt={`${person.names} ${person.surnames}`} />
                        </picture>
                        <p>
                            {person.names} {person.surnames}
                        </p>
                        <p>{person.description}</p>
                        <ul>
                            {person.stack.map(tec => (
                                <li key={tec.id}>{tec.name}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </article>
        </section>
    )
}

Team.propTypes = {
    team: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Team
