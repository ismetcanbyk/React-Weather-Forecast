import { useState, useContext } from 'react';
import { Formik, Field, Form } from 'formik';
import ApiContext from '../Context/ContextApi';
import CityData from '../Data/Data.json'


function Search() {
    const {
        city,
        setCity,
        selected,
        setSelected,
        weather,
        setWeather,
    } = useContext(ApiContext)


    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const d = new Date()
    let dayName = days[d.getDay()];
    let lastDay = days[d.getDay() + 1];
    let day2 = days[d.getDay() + 2]
    let day3 = days[d.getDay() + 3]
    let day4 = days[d.getDay() + 4]
    let day = d.getDate()
    

    const handleChange = (e) => {
        const newValue = e.target.value.split(",");
        setSelected({
            id: newValue[0],
            name: newValue[1],
            latitude: newValue[2],
            longitude: newValue[3],
            population: newValue[4],
            region: newValue[5],
        });
    };


    console.log(weather)

    
    let iconId0 = weather?.daily?.[0]?.weather?.[0]?.icon
    let iconId1 = weather?.daily?.[1]?.weather?.[0]?.icon
    let iconId2 = weather?.daily?.[2]?.weather?.[0]?.icon
    let iconId3 = weather?.daily?.[3]?.weather?.[0]?.icon
    let iconId4 = weather?.daily?.[4]?.weather?.[0]?.icon


    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-2'>
                        <Formik
                            initialValues={{
                                cityName: '',
                            }}>
                            {
                                ({ handleSubmit }) => (
                                    <form onSubmit={handleSubmit} className='form' >
                                        <select onChange={handleChange} name="cityName" className='form-select' >
                                            {city.map((city) => (
                                                <option
                                                    key={city.id}
                                                    value={[
                                                        city.id,
                                                        city.name,
                                                        city.latitude,
                                                        city.longitude,
                                                        city.population,
                                                        city.region,
                                                    ]}
                                                >
                                                    {city.name}
                                                </option>
                                            ))}
                                        </select>
                                    </form>
                                )}
                        </Formik>
                    </div>
                </div>
            </div>
            <h1 className='cityName'>{selected.name}</h1>
            <div className='container mt-5'>
                <div className='row ms-5'>
                    <div className='col-2 cardType ms-5'>
                        <div className='card' style={{ width: "9rem" }}>
                        <h5>{dayName}</h5>
                            {weather?.daily?.[0]?.weather?.[0]?.icon && (<img
                                className='card-img-top'
                                src={`http://openweathermap.org/img/wn/${iconId0}@2x.png`}
                            />)}
                            <div className='card-body'>
                                <p className='card-text'>{Math.round(weather?.daily?.[0]?.temp?.max)}° - {Math.round(weather?.daily?.[0]?.temp?.min)}°</p>
                            </div>
                        </div>
                        </div>
                        <div className='col-2 cardType ms-4'>
                            <div className='card ' style={{ width: "9rem" }}>
                            <h5>{lastDay}</h5>
                                {weather?.daily?.[1]?.weather?.[0]?.icon && (<img
                                    src={`http://openweathermap.org/img/wn/${iconId1}@2x.png`}
                                    className='card-img-top'
                                />)}
                                <div className='card-body'>
                                    <p className='card-text'>{Math.round(weather?.daily?.[1]?.temp?.max)}° - {Math.round(weather?.daily?.[1]?.temp?.min)}° </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-2 cardType ms-4'>
                            <div className='card ' style={{ width: "9rem" }}>
                            <h5>{day2}</h5>
                                {weather?.daily?.[2]?.weather?.[0]?.icon && (<img
                                    src={`http://openweathermap.org/img/wn/${iconId2}@2x.png`}
                                    className='card-img-top'
                                />)}
                                <div className='card-body'>
                                    <p className='card-text'>{Math.round(weather?.daily?.[2]?.temp?.max)}° - {Math.round(weather?.daily?.[2]?.temp?.min)}° </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-2 cardType ms-4'>
                            <div className='card ' style={{ width: "9rem" }}>
                            <h5>{day3}</h5>
                                {weather?.daily?.[2]?.weather?.[0]?.icon && (<img
                                    src={`http://openweathermap.org/img/wn/${iconId2}@2x.png`}
                                    className='card-img-top'
                                />)}
                                <div className='card-body'>
                                    <p className='card-text'>{Math.round(weather?.daily?.[3]?.temp?.max)}° - {Math.round(weather?.daily?.[3]?.temp?.min)}° </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-2 cardType ms-4'>
                            <div className='card ' style={{ width: "9rem" }}>
                            <h5>{day4}</h5>
                                {weather?.daily?.[2]?.weather?.[0]?.icon && (<img
                                    src={`http://openweathermap.org/img/wn/${iconId2}@2x.png`}
                                    className='card-img-top'
                                />)}
                                <div className='card-body'>
                                    <p className='card-text'>{Math.round(weather?.daily?.[4]?.temp?.max)}° - {Math.round(weather?.daily?.[4]?.temp?.min)}° </p>
                                </div>
                            </div>
                        </div>
                    
                </div>
            </div>

        </>
    )
};

export default Search;
