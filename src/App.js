import React, { Component } from "react";
import Weather from "./components/weather";
import "bootstrap/dist/css/bootstrap.min.css";
import "weather-icons/css/weather-icons.css";
import Form from "./components/form";

const API_KEY = "985840e90635ff1474a4362987ebb6e5";
class App extends Component {
  constructor() {
    super();
    this.state = {
      city: undefined,
      country: undefined,
      icon: undefined,
      description: undefined,
      main: undefined,
      celsius: undefined,
      temp_max: undefined,
      temp_min: undefined,
      error: false,
    };

    this.weatherIcon = {
      Thunderstorm: "wi-thunderstorm",
      Drizzle: "wi-sleet",
      Rain: "wi-storm-showers",
      Snow: "wi-snow",
      Atomsphere: "wi-fog",
      Clear: "wi-day-sunny",
      Clouds: "wi-day-fog",
    };
  }

  calcelisius(temp) {
    let cell = Math.floor(temp - 273.15);
    return cell;
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    if (city && country) {
      const api_call = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`
      );
      const response = await api_call.json();

      this.setState({
        city: `${response.name}, ${response.sys.country}`,
        celsius: this.calcelisius(response.main.temp),
        temp_min: this.calcelisius(response.main.temp_min),
        temp_max: this.calcelisius(response.main.temp_max),
        description: response.weather[0].description,
        icon: this.weatherIcon.Thunderstorm,
      });
      this.get_weatherIcon(this.weatherIcon, response.weather[0].id);
    } else {
      this.setState({ error: true });
    }
  };

  render() {
    return (
      <div>
        <Form loadWeather={this.getWeather} error={this.state.error} />
        <Weather
          city={this.state.city}
          country={this.state.country}
          description={this.state.description}
          celc={this.state.celsius}
          temp_min={this.state.temp_min}
          temp_max={this.state.temp_max}
          weatherIcon={this.state.icon}
        />
      </div>
    );
  }
}

export default App;
