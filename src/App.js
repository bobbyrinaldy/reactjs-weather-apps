import React, { Component } from 'react';
import axios from 'axios';

import Title from './components/Title'
import Form from './components/Form'
import Weather from './components/Weather'

const API_KEY = "83da6651eb53f5a6285ffa84dac00020";
const ERROR_MSG = "Silahkan Isi Form Terlebih Dahulu.";
const ERROR_NOT_FOUND = "Kota atau Negara tersebut tidak terdaftar.";

class App extends Component {
  state = {
    temp    : undefined,
    city    : undefined,
    country : undefined,
    desc    : undefined,
    lat     : undefined,
    long    : undefined,
    wind    : undefined,
    error   : undefined,
  }

  getWeather = (e) => {
    e.preventDefault();

    const CITY = e.target.elements.city.value;
    const COUNTRY = e.target.elements.country.value;

    if (CITY || COUNTRY) {
      axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${CITY},${COUNTRY}&appid=${API_KEY}`)
           .then(res => {
              const data = res.data;
              console.log(data);
              this.setState({
                temp : data.main.temp,
                city : data.name,
                country : data.sys.country,
                desc : data.weather[0].main,
                lat : data.coord.lat,
                long : data.coord.lon,
                wind : data.wind.speed,
                error : ''
              });
           })
           .catch(error => {
             this.setState({
               temp : undefined,
               city : undefined,
               country : undefined,
               desc : undefined,
               lat     : undefined,
               long    : undefined,
               wind    : undefined,
               error : ERROR_NOT_FOUND
             });
           });
    }else {
      this.setState({
        temp : undefined,
        city : undefined,
        country : undefined,
        desc : undefined,
        lat     : undefined,
        long    : undefined,
        wind    : undefined,
        error : ERROR_MSG
      });
    }

  }

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">

                  <div className="col-xs-5 title-container">
                    <Title />
                  </div>

                  <div className="col-xs-7 form-container">
                    <Form getWeather={this.getWeather}/>
                    <Weather
                      temp = {this.state.temp}
                      city = {this.state.city}
                      country = {this.state.country}
                      desc = {this.state.desc}
                      lat = {this.state.lat}
                      long = {this.state.long}
                      wind = {this.state.wind}
                      error = {this.state.error}
                    />
                  </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
  }

export default App;
