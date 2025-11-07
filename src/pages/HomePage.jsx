// import { useParams } from "react-router-dom"
import CardTrip from "../components/cardTrip"
import trips from "../data/trips.js"
import { Link } from "react-router-dom"

const HomePage = () => {

    return (
        <>
            <h1>Gestione Viaggi Booroad</h1>
            <div className="card-container">
                {/* Generazione card viaggi in base all'array */}
                {trips.map(i => (
                    // Link per aprire pagina singolo viaggio
                    <Link key={i.id}
                        to={`/trip/${i.id}`} >
                        <CardTrip
                            tripProp={i} />
                    </Link >
                ))}
            </div>
        </>
    )
}

export default HomePage