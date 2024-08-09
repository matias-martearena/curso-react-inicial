import './about.css'

const About = () => {
    return (
        <aside className="about-container">
            <h2 className="about-main-title">¡Welcome to Travel MA!</h2>
            <span className="about-line"></span>
            <p className="about-description">
                Discover stunning views of cities around the world and explore their top attractions. Whether you are planning your next trip or just
                curious about new destinations, our site provides beautiful images and detailed information on the best places to visit. Start your
                adventure with Travel MA today!
            </p>
            <ul className="about-services-list">
                <li className="about-service">Explore cities</li>
                <span className="about-service-line"></span>
                <li className="about-service">Provide feedback</li>
                <span className="about-service-line"></span>
                <li className="about-service">Choose your destination</li>
            </ul>
        </aside>
    )
}

export default About
