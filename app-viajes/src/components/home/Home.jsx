import './home.css'
import Header from '../header/Header'
import Footer from '../footer/Footer'
 
const Home = () => {
    return (
        <section>
            <Header />
            <h1>Welcome to Travel MA</h1>
            <main>
                <div className="hero"></div>
            </main>
            {/* About */}
            <Footer />
        </section>
    )
}
 
export default Home
