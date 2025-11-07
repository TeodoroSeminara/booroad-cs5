import { Link } from "react-router-dom"

const Navbar = () => {

    return (
        <>
            {/* Percorso del logo per Home */}
            <Link to="/"><img src="/img/logo.png" alt="logo_booroad" className="logo" /></Link>
        </>
    )
}

export default Navbar