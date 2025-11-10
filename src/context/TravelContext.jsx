// import { createContext, useContext, useState } from "react"
// import trips from '../data/trips';
// import guide from '../data/guide';

// // Hook context
// const TravelContext = createContext();

// const TravelProvider = ({ children }) => {


//     return (
//         <TravelContext.Provider
//             value={{
//                 // Value da exportare con context

//             }}>
//             {children}
//         </TravelContext.Provider>
//     )
// }

// // Creato hook da importare nelle pagine per utilizzo context
// const useAddTravel = () => {
//     const search = useContext(TravelContext)
//     return search
// }

// export { useAddTravel, TravelProvider }

// src/context/TravelContext.js
import { createContext, useContext, useState } from "react";
import trips from "../data/trips";

const TravelContext = createContext();

export const TravelProvider = ({ children }) => {
    const [travels, setTravels] = useState(trips);

    const addTravel = (newTravel) => {
        setTravels((prev) => [...prev, { ...newTravel, id: Date.now() }]);
    };

    return (
        <TravelContext.Provider value={{ travels, addTravel }}>
            {children}
        </TravelContext.Provider>
    );
};

export const useTravel = () => {
    return useContext(TravelContext);
};