import React, { createContext, useEffect, useState } from "react";
// import { locationContext } from "./LocationContext";
import axios from "axios";

const DataContext = createContext()

const DataProvider = ({ children }) => {
  // todo: console.log en cada endpoint, el navegador no respode estados de cambio de permisos de geo
  // loader
  const [isLoader, setIsLoader] = useState(true);
  // long lat
  const [longLat, setLongLat] = useState(null);
  // info api
  const [dataApi, setDataApi] = useState([]);
  useEffect(() => {
    if (longLat) {
      axios
        .post(
          `https://api.openweathermap.org/data/2.5/weather?lat=${longLat?.lat}&lon=${longLat?.long}&appid=39f4571e6a4b235a7f18b027850c77fe&lang=es`
        )
        .then((res) => {
          setDataApi(res.data);
          setIsLoader(false);
          
        });
    }
  }, [longLat]);
  const data = {
    isLoader,
    setIsLoader,
    longLat,
    setLongLat,
    dataApi,
  }

  return (
    <DataContext.Provider
      value={data}
    >
      {children}
    </DataContext.Provider>
  );
};

export {DataProvider};
export default DataContext;
