import React from 'react'

class Form extends React.Component {
  render() {
    return (
        <form onSubmit={this.props.getWeather}>
          <input type="text" name="city" placeholder="Nama Kota" />
          <input type="text" name="country" placeholder="Nama Negara" />
          <button type="submit">Cek Cuaca</button>
        </form>
    );
  }
}

export default Form;
