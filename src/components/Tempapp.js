import React, { useEffect, useState } from "react";
import './styles/style.css';

const Tempapp = () => {

    const [city, setCity] = useState("pune");
    const [search, setSearch] = useState("Mumbai");

    useEffect( () => {
        const fetchApi = async () => {
            // const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=0289bccf2cccc643d44c11db45d161bb`;
            const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${apiKey}`;
            const response = await fetch(url);
            //console.log(response);
            const resJson = await response.json();
            setCity(resJson.main);
        }
        fetchApi();
    }, [search] )
    return(
        <>
            <div className="box">
                <div className="inputData">
                    <input
                    type="search"
                    value={search}
                    className="inputField"
                    onChange={ (event) => {
                        setSearch(event.target.value)
                    }}/>
                </div>
                {!city ? (
                    <p className="errormessage">No Data Found</p>
                ) : (
                <div className="info">
                    <h2 className="location">
                    <i class="fa-solid fa-street-view"></i>{search}
                    </h2>
                    <h1 className="temp">
                    {city.temp}° Cel
                    </h1>
                    <h3 className="tempmin_max"> Min : {city.temp_min}° Cel | Max : {city.temp_max}° Cel</h3>
                    <div className="wave-one"></div>
                <div className="wave-two"></div>
                <div className="wave-three"></div>
                </div>   
            )}
             </div>
        </>
    )
}
export default Tempapp;