import { createContext, useContext, useEffect, useState } from "react";

// create context
export const CarsInfoContext = createContext()

// create provider
export const CarsInfoContextProvider = ({children}) => {
    const [cars, setCars] = useState(null);

    return <CarsInfoContext.Provider value={{cars, setCars}}>
        {children}
    </CarsInfoContext.Provider>
}

export const useCarInfoContext = () => {
    return useContext(CarsInfoContext)
}