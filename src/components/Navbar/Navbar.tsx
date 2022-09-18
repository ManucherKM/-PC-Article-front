import { Link } from "react-router-dom"


const Navbar = () => {
    return (
        <nav>
            <div className="container flex justify-between items-center py-6">
                <Link to="/" >
                    <img className="w-12" src="https://cdn.svgporn.com/logos/new-relic-icon.svg" alt="Logo" />
                </Link>
                <div>
                    <ul className="flex">
                        <li className="mr-4">
                            <Link className="text-base px-4 py-2 border border-lightgreen rounded-lg text-lightgreen" to="/login">Вход</Link>
                        </li>
                        <li>
                            <Link className="text-base px-4 py-2 bg-lightgreen rounded-lg text-white" to="/register">Регистрация</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar