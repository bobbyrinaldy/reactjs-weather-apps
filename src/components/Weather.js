import React from 'react'

class Weather extends React.Component {
  render() {
    return (
        <div className="weather__info">
          {
            this.props.country && this.props.country ?
              <p>
                <span className="weather__value">
                  Lokasi : {this.props.city} , {this.props.country}
                </span>
              </p> : ''
          }
          {
            this.props.temp ?
              <p>
                <span className="weather__value">
                  Temperatur : {this.props.temp}
                </span>
              </p> : ''
          }
          {
            this.props.desc ?
              <p>
                <span className="weather__value">
                  Keterangan : {this.props.desc}
                </span>
              </p> : ''
          }
          {
            this.props.lat && this.props.long ?
              <p>
                <span className="weather__value">
                  Koordinat : lat {this.props.lat} - long {this.props.long}
                </span>
              </p> : ''
          }
          {
            this.props.wind ?
              <p>
                <span className="weather__value">
                  Kecepatan Angin : {this.props.wind}
                </span>
              </p> : ''
          }
          {
            this.props.error ?
              <p> <span className="weather__error">{this.props.error} </span> </p> : ''
          }


        </div>
    );
  }
}

export default Weather;
