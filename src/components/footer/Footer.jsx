import './footer.css'

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-wave-container">
                <svg id="visual" viewBox="0 0 960 540" width="960" height="540" xmlns="http://www.w3.org/2000/svg" version="1.1">
                    <path
                        d="M0 220L26.7 225.8C53.3 231.7 106.7 243.3 160 256.7C213.3 270 266.7 285 320 286.2C373.3 287.3 426.7 274.7 480 261.5C533.3 248.3 586.7 234.7 640 236.3C693.3 238 746.7 255 800 266.2C853.3 277.3 906.7 282.7 933.3 285.3L960 288L960 541L933.3 541C906.7 541 853.3 541 800 541C746.7 541 693.3 541 640 541C586.7 541 533.3 541 480 541C426.7 541 373.3 541 320 541C266.7 541 213.3 541 160 541C106.7 541 53.3 541 26.7 541L0 541Z"
                        fill="#fa7268"></path>
                    <path
                        d="M0 305L26.7 297.7C53.3 290.3 106.7 275.7 160 278.5C213.3 281.3 266.7 301.7 320 310.7C373.3 319.7 426.7 317.3 480 318.8C533.3 320.3 586.7 325.7 640 319.8C693.3 314 746.7 297 800 297C853.3 297 906.7 314 933.3 322.5L960 331L960 541L933.3 541C906.7 541 853.3 541 800 541C746.7 541 693.3 541 640 541C586.7 541 533.3 541 480 541C426.7 541 373.3 541 320 541C266.7 541 213.3 541 160 541C106.7 541 53.3 541 26.7 541L0 541Z"
                        fill="#f8836b"></path>
                    <path
                        d="M0 297L26.7 300C53.3 303 106.7 309 160 322.2C213.3 335.3 266.7 355.7 320 352.5C373.3 349.3 426.7 322.7 480 311.7C533.3 300.7 586.7 305.3 640 305.3C693.3 305.3 746.7 300.7 800 302.8C853.3 305 906.7 314 933.3 318.5L960 323L960 541L933.3 541C906.7 541 853.3 541 800 541C746.7 541 693.3 541 640 541C586.7 541 533.3 541 480 541C426.7 541 373.3 541 320 541C266.7 541 213.3 541 160 541C106.7 541 53.3 541 26.7 541L0 541Z"
                        fill="#f69371"></path>
                    <path
                        d="M0 339L26.7 350.5C53.3 362 106.7 385 160 387.2C213.3 389.3 266.7 370.7 320 367C373.3 363.3 426.7 374.7 480 379.5C533.3 384.3 586.7 382.7 640 372.3C693.3 362 746.7 343 800 336.3C853.3 329.7 906.7 335.3 933.3 338.2L960 341L960 541L933.3 541C906.7 541 853.3 541 800 541C746.7 541 693.3 541 640 541C586.7 541 533.3 541 480 541C426.7 541 373.3 541 320 541C266.7 541 213.3 541 160 541C106.7 541 53.3 541 26.7 541L0 541Z"
                        fill="#f3a27a"></path>
                    <path
                        d="M0 381L26.7 388.3C53.3 395.7 106.7 410.3 160 416.7C213.3 423 266.7 421 320 423.2C373.3 425.3 426.7 431.7 480 435C533.3 438.3 586.7 438.7 640 429.5C693.3 420.3 746.7 401.7 800 393.2C853.3 384.7 906.7 386.3 933.3 387.2L960 388L960 541L933.3 541C906.7 541 853.3 541 800 541C746.7 541 693.3 541 640 541C586.7 541 533.3 541 480 541C426.7 541 373.3 541 320 541C266.7 541 213.3 541 160 541C106.7 541 53.3 541 26.7 541L0 541Z"
                        fill="#f1b086"></path>
                    <path
                        d="M0 413L26.7 416.3C53.3 419.7 106.7 426.3 160 426.3C213.3 426.3 266.7 419.7 320 421.2C373.3 422.7 426.7 432.3 480 431.7C533.3 431 586.7 420 640 418.5C693.3 417 746.7 425 800 428.2C853.3 431.3 906.7 429.7 933.3 428.8L960 428L960 541L933.3 541C906.7 541 853.3 541 800 541C746.7 541 693.3 541 640 541C586.7 541 533.3 541 480 541C426.7 541 373.3 541 320 541C266.7 541 213.3 541 160 541C106.7 541 53.3 541 26.7 541L0 541Z"
                        fill="#eebd95"></path>
                    <path
                        d="M0 494L26.7 484.3C53.3 474.7 106.7 455.3 160 450.8C213.3 446.3 266.7 456.7 320 457.8C373.3 459 426.7 451 480 451.8C533.3 452.7 586.7 462.3 640 469.2C693.3 476 746.7 480 800 482C853.3 484 906.7 484 933.3 484L960 484L960 541L933.3 541C906.7 541 853.3 541 800 541C746.7 541 693.3 541 640 541C586.7 541 533.3 541 480 541C426.7 541 373.3 541 320 541C266.7 541 213.3 541 160 541C106.7 541 53.3 541 26.7 541L0 541Z"
                        fill="#ecc9a6"></path>
                    <path
                        d="M0 489L26.7 491.3C53.3 493.7 106.7 498.3 160 501.5C213.3 504.7 266.7 506.3 320 504.2C373.3 502 426.7 496 480 498.8C533.3 501.7 586.7 513.3 640 511.8C693.3 510.3 746.7 495.7 800 495.3C853.3 495 906.7 509 933.3 516L960 523L960 541L933.3 541C906.7 541 853.3 541 800 541C746.7 541 693.3 541 640 541C586.7 541 533.3 541 480 541C426.7 541 373.3 541 320 541C266.7 541 213.3 541 160 541C106.7 541 53.3 541 26.7 541L0 541Z"
                        fill="#ebd5b8"></path>
                </svg>
            </div>
            <div className="footer-logo-container">
                <a href="/" className="footer-logo">
                    MA
                </a>
            </div>
            <div className="footer-links-container">
                <p>Get connected with us on social networks.</p>
                <div className="footer-social-links">
                    <a href="/">
                        <span className="fa-brands fa-facebook"></span>
                    </a>
                    <a href="/">
                        <span className="fa-brands fa-twitter"></span>
                    </a>
                    <a href="/">
                        <span className="fa-brands fa-google"></span>
                    </a>
                    <a href="/">
                        <span className="fa-brands fa-instagram"></span>
                    </a>
                    <a href="/">
                        <span className="fa-brands fa-linkedin"></span>
                    </a>
                    <a href="/">
                        <span className="fa-brands fa-github"></span>
                    </a>
                </div>
            </div>
            <article className="footer-content-container">
                <div className="footer-content">
                    <h2 className="footer-content-title">Travel MA</h2>
                    <ul className="footer-list">
                        <li>
                            Explore the vibrant cities around the world and see what other users have to say about their experiences. From hidden gems
                            to bustling metropolises, our community shares their insights and feedback to help you discover the best each city has to
                            offer.
                        </li>
                        <li>
                            Meet our team of passionate creators! We are a dynamic duo dedicated to bringing you the best travel experiences through
                            our curated city guides and user feedback. With a shared love for exploration and a commitment to quality, we strive to
                            provide valuable insights and help you uncover the hidden treasures of every destination. Join us on this journey and lets
                            discover the world together!
                        </li>
                    </ul>
                </div>
                <div className="footer-content">
                    <h2 className="footer-content-title">Our Page</h2>
                    <ul className="footer-list">
                        {/* Agregar mas rutas aqui */}
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/city-list">List of cities</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-content">
                    <h2 className="footer-content-title">Contact</h2>
                    <ul className="footer-list">
                        <li>
                            <i className="fa-solid fa-house"></i>
                            <a href="/">Argentina, Calle sin nombre 221</a>
                        </li>
                        <li>
                            <i className="fa-solid fa-envelope"></i>
                            <a href="/">info@travelMA.com</a>
                        </li>
                        <li>
                            <i className="fa-solid fa-phone"></i>
                            <a href="/">+388 1234567</a>
                        </li>
                    </ul>
                </div>
            </article>
            <span className="footer-copy">&copy; 2024 Copyright: The best group - All rights reserved.</span>
        </footer>
    )
}

export default Footer
