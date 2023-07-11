import React, { useState, useEffect } from "react";
import axios from "axios";

const SearchForm = () => {
  const [name, setname] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    setname(event.target.value);
  };

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=1708028d8d1b7aab9c422b6bc372c6b7`
      );
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      fetchData();
    }
  };

  const handleButtonClick = () => {
    fetchData();
  };

  useEffect(() => {
    if (name) {
      fetchData();
    }
  }, [name]);

  return (
    <div>
      <div>
        <img
          src="https://cdn-icons-png.flaticon.com/512/3767/3767036.png"
          style={{  marginTop: "10px", width: "200px", }}
          alt="Icon"
        />
      </div>
      <h2>Météo</h2>
      <input
        type="text"
        value={name}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder="Enter a name"
        style={{  margin: "20px 0px" }}
      />
      <button onClick={handleButtonClick}>Validate</button>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {data && (
        <div>
          <h3 style={{  color: "blue" }}>{data.name}</h3>
          <h4>Temperature: {Math.round(data.main.temp - 273.15)}°C</h4>
          <h4>Weather: {data.weather[0].description}</h4>
          <h4>Humidity: {data.main.humidity} %</h4>
          <h4>Visibility: {data.main.visibility} m</h4>
          <h4>State: {data.sys.country}</h4>
        </div>
      )}
    </div>
  );
};

export default SearchForm;
