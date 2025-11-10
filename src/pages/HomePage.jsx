import CardTrip from "../components/cardTrip";
import trips from "../data/trips.js";
import { Link } from "react-router-dom";
import AddTravel from "../components/AddTravel";

const HomePage = () => {
    return (
        <div className="container-fluid py-4">
            <div className="row justify-content-center mb-5">
                <div className="col-lg-8 text-center">
                    <h1 className="display-4 fw-bold text-primary mb-3">
                        Gestione Viaggi Booroad
                    </h1>
                    <p className="lead text-muted">
                        Scopri le nostre destinazioni e gestisci i tuoi viaggi
                    </p>
                </div>
            </div>

            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
                    {trips.map((i) => (
                        <Link
                            key={i.id}
                            to={`/trip/${i.id}`}
                            className="text-decoration-none"
                        >
                            <CardTrip tripProp={i} />
                        </Link>
                    ))}

                    <Link to={"/newtravel"}><AddTravel /></Link>
                </div>

            </div>
        </div>
    );
};

export default HomePage;
