export default function CardTrip({ tripProp }) {
    // destrutturazione prop
    const { destinazione, partenza, rientro, compagnia_aerea, accompagnatore, image } = tripProp;

    return (
        <>
            {/* Info Viaggio singolo  */}
            <div className="card-trip-container">
                <p>{destinazione}</p>
                <p>{partenza}</p>
                <p>{rientro}</p>
                <p>{compagnia_aerea}</p>
                <p>{accompagnatore}</p>
                <img src={image} alt={destinazione} />
            </div>
        </>
    )
}