import './main.css'
import PropTypes from 'prop-types'
import About from '../about/About'
import Team from '../team/Team'

const Main = ({ team }) => {
    return (
        <main>
            <div>
                <About />
                <Team team={team} />
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                    fill="#ebd5b8"
                    d="M0,128L48,117.3C96,107,192,85,288,90.7C384,96,480,128,576,122.7C672,117,768,75,864,53.3C960,32,1056,32,1152,58.7C1248,85,1344,139,1392,165.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
            </svg>
        </main>
    )
}

Main.propTypes = {
    team: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Main
