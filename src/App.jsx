import "./App.css";
import RequestGeo from "./Components/RequestGeo";
import TheWeather from "./Components/TheWeather";
import AllLayout from "./Components/TheWeather";
import TheLoader from "./Components/TheLoader";
import BgVideo from "./Components/BgVideo";
import {DataProvider} from "./contexts/DataProvider";
import GeoLocation from "./Components/GeoLocation";

function App() {
  return (
    <div className="App min-h-screen">
      {/* ================= Request ============= */}
      {/* <RequestGeo /> */}
      {/* ===================== PERF CODE WEATHER ================== */}
      {/* <TheLoader /> */}
      <DataProvider>
        <GeoLocation />
        <BgVideo />
        <TheWeather />
      </DataProvider>
    </div>
  );
}

export default App;
