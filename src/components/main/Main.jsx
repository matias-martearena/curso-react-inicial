import './main.css'
import team from '../../database/team.json'
import About from '../about/About'
import Us from '../us/Us'

const Main = () => {
    return (
        <main>
            <About />
            <Us team={team} />
        </main>
    )
}

export default Main
