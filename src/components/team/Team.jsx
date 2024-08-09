import './team.css'
import PropTypes from 'prop-types'

const Team = ({ team }) => {
    return (
        <section className="team-container">
            <h2 className="team-title">Meet our team</h2>
            <span className="team-title-line"></span>
            <article className="team-card-container">
                {team.map(person => (
                    <div className="team-card" key={person.id}>
                        <picture className="team-img-container">
                            <img className="team-img" src={person.image} alt={`${person.names} ${person.surnames}`} />
                        </picture>
                        <div className="team-info">
                            <p className="team-name">
                                {person.names} {person.surnames}
                            </p>
                            <p className="team-description">{person.description}</p>
                            <ul className="team-stack">
                                {person.stack.map(tec => (
                                    <li key={tec.id}>{tec.name}</li>
                                ))}
                            </ul>
                        </div>
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
