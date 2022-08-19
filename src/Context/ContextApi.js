import { createContext, useState, useEffect } from "react";
import CityData from '../Data/Data.json'
import axios from "axios";

const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
    const apiKey = "36f229bac579805ddca6efb882bd1f9e"
    const [city, setCity] = useState([]);
    const [selected, setSelected] = useState({
        "id": 1,
        "name": "Adana",
        "latitude": "37.0000",
        "longitude": "35.3213",
        "population": 2183167,
        "region": "Akdeniz"
    });
    const [weather, setWeather] = useState({});
    const [unit, setUnit] = useState("metric")
 

    const values = {
        city,
        setCity,
        selected,
        setSelected,
        weather,
        setWeather,
        unit,
        setUnit,
        
    };

    function getCity() {
        setCity(CityData)
    }

    const cityLat = selected.latitude;
    const cityLong = selected.longitude;
    

    useEffect(() => {
        fetch(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${cityLat}&lon=${cityLong}&exclude=minutely,hourly&units=${unit}&appid=${apiKey}`
        )
            .then((response) => response.json())
            .then((data) => setWeather(data));
        return;
    }, [selected, unit]);


    

    useEffect(() => {
        getCity();
        return;
    }, [unit]);




    return (
        <ApiContext.Provider value={values}>{children}</ApiContext.Provider>
    )
}







export default ApiContext;