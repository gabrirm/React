/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react"


const CitiesContext = createContext()

function CitiesProvider({children}){
    const [cities, setCities] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(function () {
      async function fetchData() {
        try {
          setIsLoading(true);
          const res = await fetch("http://localhost:9000/cities");
          const data = await res.json();
          setCities(data);
        } catch (err) {
          console.log(err);
        } finally {
          setIsLoading(false);
        }
      }
      fetchData();
    }, []);
    return <CitiesContext.Provider value={{
        cities,
        isLoading
    }}>
        {children}
    </CitiesContext.Provider>
}

function useCities(){
    const context = useContext(CitiesContext)
    if (context == undefined) throw new Error("context used outside CitiesProvider")
    return context
}

export {CitiesProvider, useCities}