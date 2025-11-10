// import { useState, useEffect } from 'react';
// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
// import trips from '../data/trips';
// import guide from '../data/guide';

// function NewTravel() {
//     const [validated, setValidated] = useState(false);
//     // variabile di stato per nuovo viaggio
//     const [travels, setTravels] = useState(trips)
//     const [useTravel, setUseTravel] = useState({
//         // id: "",
//         destinazione: "",
//         partenza: "",
//         rientro: "",
//         // giorno: "",
//         compagnia_aerea: "",
//         accompagnatore: "",
//         image: "/img/trips/dreamstime_xxl_89603672.jpg",
//     })

//     useEffect(() => {
//         console.log("Stato viaggi aggiornato:", travels);
//     }, [travels]); // si esegue ogni volta che `travels` cambia

//     const handleSubmit = (event) => {
//         const form = event.currentTarget;
//         if (form.checkValidity() === false) {
//             event.stopPropagation();
//         }
//         event.preventDefault();
//         setTravels([...travels, useTravel]);

//         setUseTravel({
//             // id: "",
//             destinazione: "",
//             partenza: "",
//             rientro: "",
//             // giorno: "",
//             compagnia_aerea: "",
//             accompagnatore: "",
//             image: "/img/trips/dreamstime_xxl_89603672.jpg"
//         });

//         setValidated(true);

//         // console.log(trips, "aggiunto" + useTravel);

//     };

//     const handleChange = (e) => {
//         const { name, value } = e.target;

//         setUseTravel({ ...useTravel, [name]: value })

//         // console.log("teoricamente array", useTravel, "settrav", setUseTravel);

//     }

//     return (
//         <>
//             <div className='container'>
//                 <Form noValidate validated={validated} onSubmit={handleSubmit}>
//                     <Row className="mb-3">
//                         <Form.Group as={Col} md="4" controlId="validationCustom01">
//                             <Form.Label>Destinazione</Form.Label>
//                             <Form.Control
//                                 required
//                                 type="text"
//                                 placeholder="Destinazione"
//                                 name='destinazione'
//                                 value={useTravel.destinazione}
//                                 onChange={handleChange}
//                             />
//                             <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//                         </Form.Group>
//                         <Form.Group as={Col} md="4" controlId="validationCustom02">
//                             <Form.Label>Partenza</Form.Label>
//                             <Form.Control
//                                 required
//                                 type="date"
//                                 name='partenza'
//                                 value={useTravel.partenza}
//                                 onChange={handleChange}
//                             />
//                             <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//                         </Form.Group>
//                         <Form.Group as={Col} md="4" controlId="validationCustom03">
//                             <Form.Label>Ritorno</Form.Label>
//                             <Form.Control
//                                 required
//                                 type="date"
//                                 name='rientro'
//                                 value={useTravel.rientro}
//                                 onChange={handleChange}
//                             />
//                             <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//                         </Form.Group>
//                     </Row>
//                     <Row className="mb-3">
//                         <Form.Group as={Col} md="4" controlId="validationCustom04">
//                             <Form.Label>Accompagnatore</Form.Label>
//                             <Form.Select aria-label="Default select example" name='accompagnatore'
//                                 value={useTravel.accompagnatore}
//                                 onChange={handleChange}>
//                                 <option value="0">Seleziona un collaboratore</option>
//                                 {guide.map((i) => (
//                                     <option key={i.id} value={i.id}>{i.collaboratore}</option>
//                                 ))}
//                             </Form.Select>
//                         </Form.Group>
//                         <Form.Group as={Col} md="3" controlId="validationCustom05">
//                             <Form.Label>Compagnia Aerea</Form.Label>
//                             <Form.Select aria-label="Default select example" name='compagnia_aerea'
//                                 value={useTravel.compagnia_aerea}
//                                 onChange={handleChange}>
//                                 <option>Seleziona un collaboratore</option>
//                                 {trips.map((i) => (
//                                     <option key={i.id} value={i.id} >{i.compagnia_aerea}</option>
//                                 ))}
//                             </Form.Select>
//                         </Form.Group>
//                     </Row>
//                     <Button type="submit">Submit form</Button>
//                 </Form>
//             </div>
//         </>
//     );
// }

// export default NewTravel;


// src/components/NewTravel.js
// import { useState, useEffect } from 'react';
// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
// import trips from '../data/trips';
// import guide from '../data/guide';

// function NewTravel() {
//     const [validated, setValidated] = useState(false);
//     // variabile di stato per nuovo viaggio
//     const [travels, setTravels] = useState(trips)
//     const [useTravel, setUseTravel] = useState({
//         // id: "",
//         destinazione: "",
//         partenza: "",
//         rientro: "",
//         // giorno: "",
//         compagnia_aerea: "",
//         accompagnatore: "",
//         image: "/img/trips/dreamstime_xxl_89603672.jpg",
//     })

//     useEffect(() => {
//         console.log("Stato viaggi aggiornato:", travels);
//     }, [travels]); // si esegue ogni volta che `travels` cambia

//     const handleSubmit = (event) => {
//         const form = event.currentTarget;
//         if (form.checkValidity() === false) {
//             event.stopPropagation();
//         }
//         event.preventDefault();
//         setTravels([...travels, useTravel]);

//         setUseTravel({
//             // id: "",
//             destinazione: "",
//             partenza: "",
//             rientro: "",
//             // giorno: "",
//             compagnia_aerea: "",
//             accompagnatore: "",
//             image: "/img/trips/dreamstime_xxl_89603672.jpg"
//         });

//         setValidated(true);

//         // console.log(trips, "aggiunto" + useTravel);

//     };

//     const handleChange = (e) => {
//         const { name, value } = e.target;

//         setUseTravel({ ...useTravel, [name]: value })

//         // console.log("teoricamente array", useTravel, "settrav", setUseTravel);

//     }

//     return (
//         <>
//             <div className='container'>
//                 <Form noValidate validated={validated} onSubmit={handleSubmit}>
//                     <Row className="mb-3">
//                         <Form.Group as={Col} md="4" controlId="validationCustom01">
//                             <Form.Label>Destinazione</Form.Label>
//                             <Form.Control
//                                 required
//                                 type="text"
//                                 placeholder="Destinazione"
//                                 name='destinazione'
//                                 value={useTravel.destinazione}
//                                 onChange={handleChange}
//                             />
//                             <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//                         </Form.Group>
//                         <Form.Group as={Col} md="4" controlId="validationCustom02">
//                             <Form.Label>Partenza</Form.Label>
//                             <Form.Control
//                                 required
//                                 type="date"
//                                 name='partenza'
//                                 value={useTravel.partenza}
//                                 onChange={handleChange}
//                             />
//                             <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//                         </Form.Group>
//                         <Form.Group as={Col} md="4" controlId="validationCustom03">
//                             <Form.Label>Ritorno</Form.Label>
//                             <Form.Control
//                                 required
//                                 type="date"
//                                 name='rientro'
//                                 value={useTravel.rientro}
//                                 onChange={handleChange}
//                             />
//                             <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//                         </Form.Group>
//                     </Row>
//                     <Row className="mb-3">
//                         <Form.Group as={Col} md="4" controlId="validationCustom04">
//                             <Form.Label>Accompagnatore</Form.Label>
//                             <Form.Select aria-label="Default select example" name='accompagnatore'
//                                 value={useTravel.accompagnatore}
//                                 onChange={handleChange}>
//                                 <option value="0">Seleziona un collaboratore</option>
//                                 {guide.map((i) => (
//                                     <option key={i.id} value={i.id}>{i.collaboratore}</option>
//                                 ))}
//                             </Form.Select>
//                         </Form.Group>
//                         <Form.Group as={Col} md="3" controlId="validationCustom05">
//                             <Form.Label>Compagnia Aerea</Form.Label>
//                             <Form.Select aria-label="Default select example" name='compagnia_aerea'
//                                 value={useTravel.compagnia_aerea}
//                                 onChange={handleChange}>
//                                 <option>Seleziona un collaboratore</option>
//                                 {trips.map((i) => (
//                                     <option key={i.id} value={i.id} >{i.compagnia_aerea}</option>
//                                 ))}
//                             </Form.Select>
//                         </Form.Group>
//                     </Row>
//                     <Button type="submit">Submit form</Button>
//                 </Form>
//             </div>
//         </>
//     );
// }

// export default NewTravel;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTravel } from "../context/TravelContext";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import guide from "../data/guide";
import trips from "../data/trips";
// import "./NewTravel.css";

function NewTravel() {
    const navigate = useNavigate();
    const { addTravel } = useTravel();
    const [validated, setValidated] = useState(false);
    const [newTravelData, setNewTravelData] = useState({
        destinazione: "",
        partenza: "",
        rientro: "",
        compagnia_aerea: "",
        accompagnatore: "",
        image: "/img/trips/dreamstime_xxl_89603672.jpg",
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            event.stopPropagation();
            setValidated(true);
            return;
        }

        addTravel(newTravelData);

        setNewTravelData({
            destinazione: "",
            partenza: "",
            rientro: "",
            compagnia_aerea: "",
            accompagnatore: "",
            image: "/img/trips/dreamstime_xxl_89603672.jpg",
        });

        setValidated(false);

        // Mostra un messaggio di successo
        alert("Viaggio aggiunto con successo!");

        // Naviga alla homepage dopo aver aggiunto il viaggio
        navigate("/");
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewTravelData({ ...newTravelData, [name]: value });
    };

    return (
        <div className="new-travel-container">
            <div className="container">
                <div className="row justify-content-center mb-4">
                    <div className="col-lg-8">
                        <div className="card new-travel-header">
                            <div className="card-body text-center">
                                <h1 className="new-travel-title">
                                    Aggiungi Nuovo Viaggio
                                </h1>
                                <p className="new-travel-subtitle">
                                    Compila tutti i campi per aggiungere un nuovo viaggio alla collezione
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="new-travel-form-container">
                            <Form className="new-travel-form" noValidate validated={validated} onSubmit={handleSubmit}>
                                <Row className="mb-3">
                                    <Form.Group as={Col} md="4" controlId="validationCustom01" className="form-group">
                                        <Form.Label>🏝️ Destinazione</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Destinazione"
                                            name="destinazione"
                                            value={newTravelData.destinazione}
                                            onChange={handleChange}
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="4" controlId="validationCustom02" className="form-group">
                                        <Form.Label>🛫 Partenza</Form.Label>
                                        <Form.Control
                                            required
                                            type="date"
                                            name="partenza"
                                            value={newTravelData.partenza}
                                            onChange={handleChange}
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="4" controlId="validationCustom03" className="form-group">
                                        <Form.Label>🛬 Ritorno</Form.Label>
                                        <Form.Control
                                            required
                                            type="date"
                                            name="rientro"
                                            value={newTravelData.rientro}
                                            onChange={handleChange}
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                </Row>

                                <Row className="mb-3">
                                    <Form.Group as={Col} md="6" controlId="validationCustom04" className="form-group">
                                        <Form.Label>👨‍💼 Accompagnatore</Form.Label>
                                        <Form.Select
                                            aria-label="Seleziona un collaboratore"
                                            name="accompagnatore"
                                            value={newTravelData.accompagnatore}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="">Seleziona un collaboratore</option>
                                            {guide.map((g) => (
                                                <option key={g.id} value={g.id}>
                                                    {g.collaboratore}
                                                </option>
                                            ))}
                                        </Form.Select>
                                        <Form.Control.Feedback type="invalid">
                                            Seleziona un accompagnatore.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="6" controlId="validationCustom05" className="form-group">
                                        <Form.Label> 🛩️ Compagnia Aerea</Form.Label>
                                        <Form.Select
                                            type="text"
                                            placeholder="Compagnia aerea"
                                            name="compagnia_aerea"
                                            value={newTravelData.compagnia_aerea}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="0">Seleziona una compagnia</option>
                                            {trips.map((i) => (
                                                <option key={i.id} value={i.id} >{i.compagnia_aerea}</option>
                                            ))}
                                        </Form.Select>
                                        <Form.Control.Feedback type="invalid">
                                            Seleziona una compagnia.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Row>

                                <Button className="new-travel-submit-btn" type="submit">
                                    Aggiungi Viaggio
                                </Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewTravel;