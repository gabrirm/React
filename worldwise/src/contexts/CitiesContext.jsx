/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const CitiesContext = createContext();



function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});

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
  async function getCity(id) {
    try {
      setIsLoading(true);
      const res = await fetch(`http://localhost:9000/cities/${id}`);
      const data = await res.json();
      setCurrentCity(data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }
  async function createCity(newCity) {
    try {
      setIsLoading(true);
      const res = await fetch(`http://localhost:9000/cities/`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setCities((cities) => [...cities, data]);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }
  async function deleteCity(id) {
    try {
      setIsLoading(true);
      await fetch(`http://localhost:9000/cities/${id}`, {
        method: "DELETE",
      });
      setCities((cities) => cities.filter((city) => city.id !== id));
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        getCity,
        createCity,
        deleteCity
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  if (context == undefined)
    throw new Error("context used outside CitiesProvider");
  return context;
}

export { CitiesProvider, useCities };
