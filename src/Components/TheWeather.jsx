import React, { useContext, useEffect, useState } from "react";
import useApi from "../Hooks/useApi";
import TheLoader from "./TheLoader";
import videobg from "../assets/cloudsLoop.mp4";
import DataProvider from "../contexts/DataProvider";
import DataContext from "../contexts/DataProvider";

const TheWeather = () => {
  // ================ CONVERT CELCIOUS/FARHENHEIT ===========
  const [Convert, setConvert] = useState(false);

  const {dataApi} = useContext(DataContext);

  console.log(dataApi);

  return (
    <>
      <main className="bg-[#00000080] min-h-screen">
        <header className="text-center pt-10">
          <h1 className="text-5xl font-bold">El Clima App</h1>
          <span className="">api by Open Weather map</span>
        </header>
        <section className="text-center md:mb-14 max-w-xl mx-auto">
          <div className="flex items-center justify-around">
            <h2 className="font-light text-3xl pt-7">Metropolitana, BO</h2>
            <div className="relative px-3 flex justify-center">
              <img src="/src/assets/react.svg" alt="icon-wheather" />
              <span className="absolute bottom-0 font-light">
                algo de nubes
              </span>
            </div>
          </div>
          <div className=" flex items-center justify-center flex-wrap gap-x-5">
            <span className="font-bold text-6xl">289.03ºK</span>
            <button className="bg-gray-700 text-white active:bg-gray-500 font-bold uppercase text-sm px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-400 rounded-full">
              Change to Fahrenheit
            </button>
          </div>
        </section>
        <aside className="flex flex-wrap gap-y-3 text-center">
          <div className="flex flex-col items-center gap-2 w-1/2 sm:w-1/3 md:w-1/6">
            <i className="fa-solid fa-wind fa-4x"></i>
            <span>
              Wind Speed: <span className="font-light">6.17 M/s</span>
            </span>
          </div>
          <div className="flex flex-col items-center gap-2 w-1/2 sm:w-1/3 md:w-1/6">
            <i className="fa-solid fa-cloud fa-4x"></i>
            <span>
              Clouds: <span className="font-light">20%</span>
            </span>
          </div>
          <div className="flex flex-col items-center gap-2 w-1/2 sm:w-1/3 md:w-1/6">
            <i className="fa-solid fa-temperature-three-quarters fa-4x"></i>
            <span>
              Pressure: <span className="font-light">6.17 Pha</span>
            </span>
          </div>
          <div className="flex flex-col items-center gap-2 w-1/2 sm:w-1/3 md:w-1/6">
            <i className="fa-solid fa-droplet fa-4x"></i>
            <span>
              Humidity: <span className="font-light">57%</span>
            </span>
          </div>
          <div className="flex flex-col items-center gap-2 w-1/2 sm:w-1/3 md:w-1/6">
            <i className="fa-solid fa-temperature-arrow-up fa-4x"></i>
            <span>
              Max: <span className="font-light">289.03ºK</span>
            </span>
          </div>
          <div className="flex flex-col items-center gap-2 w-1/2 sm:w-1/3 md:w-1/6">
            <i className="fa-solid fa-temperature-arrow-down fa-4x"></i>
            <span>
              min: <span className="font-light">289.03ºK</span>
            </span>
          </div>
        </aside>
      </main>
    </>
  );
};

export default TheWeather;
// `https://api.openweathermap.org/data/2.5/weather?lat=${GetLatitude}&lon=${GetLongitude}&appid=39f4571e6a4b235a7f18b027850c77fe&lang=es`
