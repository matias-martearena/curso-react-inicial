import './home.css'
import PropTypes from 'prop-types'
import Header from '../header/Header'
import Main from '../main/Main'
import Footer from '../footer/Footer'

const Home = ({ team }) => {
    return (
        <section>
            <Header />
            <Main team={team} />
            <Footer />
        </section>
    )
}

Home.propTypes = {
    team: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Home
