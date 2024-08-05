import './header.css'

const Header = () => {
    return (
        <header>
            <nav>
                <picture>
                    <img src="/luggage.svg" alt="logo" />
                </picture>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/city-list">List</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
