import './main.css'
import PropTypes from 'prop-types'
import About from '../about/About'
import Team from '../team/Team'

const Main = ({ team }) => {
    return (
        <main>
            <About />
            <Team team={team} />
        </main>
    )
}

Main.propTypes = {
    team: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Main
