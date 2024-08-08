import './header.css'

const Header = () => {
    return (
        <header>
            <nav>
                <picture>
                    <img src="/logo.svg" alt="Travel MA logo" />
                </picture>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/city-list">List of cities</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
