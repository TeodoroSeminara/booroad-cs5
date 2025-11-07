import { Link } from "react-router-dom"
import SearchBar from "./SearchBar"

const Navbar = () => {

    return (
        <>
            <Link to="/"><img src="/img/logo.png" alt="logo_booroad" className="logo" /></Link>
            <SearchBar />
        </>
    )
}

export default Navbar