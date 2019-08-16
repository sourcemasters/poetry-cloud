import React, {Component} from 'react';
import {PoemButton} from './PoemButton';
import NewPoemForm from './NewPoemForm';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: '' };
  }

  callAPI() {
    fetch("http://localhost:9000/testAPI")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }))
      .catch(err => err);
  }

  componentDidMount() {
    this.callAPI();
  }

  getRandomPoem() {
    // placeholder content for now
    console.log("Fetching another poem!");
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div id="poem">
            <h1 id="title">Bacon Placeholder</h1>
            <h2 id="author">a poem by Big Boy</h2>
            <h2 id="year">published 1969</h2>
            <p id="text">Twice and twice shall he be marked,<br/>twice to live and twice to die</p>
          </div>
          <PoemButton text="Another!" onClick={this.getRandomPoem} disabled={false}/>
          <h3>Submit Your Favorite Poem Below!</h3>
          <NewPoemForm />
        </header>
        <p>{this.state.apiResponse}</p>
      </div>
    );
  }
}

export default App;
