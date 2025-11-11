
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
