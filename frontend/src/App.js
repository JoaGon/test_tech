import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      apiResponse: "",
      time: "",
      timezone: ""
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  callAPI() {

    fetch('http://localhost:9000/api/utc', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        timezone: this.state.timezone,
        time: this.state.time,

      }),
    }).then(res => res.text())
      .then(res => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
    // this.callAPI();
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  handleEntailmentRequest(e) {
    this.callAPI()
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            HI! Please add the time in this format 00:00:00 and timezone can be between -16 until +16.
          </p>

          <form>
            <label>
              Time:
          <input
                name="time"
                type="text"
                onChange={this.handleInputChange} />
            </label>
            <br />
            <label>
              Timezone:
          <input
                name="timezone"
                type="number"
                onChange={this.handleInputChange} />
            </label>
            <button onClick={e => { e.preventDefault(); this.handleEntailmentRequest() }}>
              Ask time
            </button>
          </form>

          <p className="App-intro">{this.state.apiResponse}</p>
         
        </header>
      </div>
    );
  }

}

export default App;
