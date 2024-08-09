import './header.css'
import logo from '../../../public/logo.svg'
import { useState } from 'react'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <header>
            <nav className="bg-[#282121]">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={logo} className="h-8" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-[#eae5d9]">Travel MA</span>
                    </a>
                    <button
                        onClick={toggleMenu}
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-[#eae5d9] rounded-lg md:hidden hover:outline-none hover:ring-2 hover:ring-gray-200"
                        aria-controls="navbar-dropdown"
                        aria-expanded={isOpen}>
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-dropdown">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg border-[#282121] bg-[#eae5d9] md:bg-[#282121] md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                            <li>
                                <a
                                    href="/"
                                    className="block py-2 px-3 text-[#282121] font-semibold rounded md:bg-transparent md:text-[#eae5d9] md:p-0 md:dark:bg-transparent hover:underline"
                                    aria-current="page">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/city-list"
                                    className="block py-2 px-3 text-[#282121] font-semibold rounded md:bg-transparent md:text-[#eae5d9] md:p-0 md:dark:bg-transparent hover:underline"
                                    aria-current="page">
                                    List of cities
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
