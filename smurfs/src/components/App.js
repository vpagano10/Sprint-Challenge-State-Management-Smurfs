// REACT IMPORTS
import React, { Component } from "react";

// REDUX/REACT-REDUX
// import { connect } from 'react-redux';

// COMPONENTS
// import { fetchSmurfs } from '../actions/index';
import AddSmurf from './CreateSmurf'
import NewSmurfs from "./NewSmurfs";
import { SmurfData } from './SmurfData';

// STLYING
import "./App.css";
import styled from 'styled-components';

const H2 =styled.h2`
  color: blue;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <H2>It's ugly but it works!</H2>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <AddSmurf />
        <NewSmurfs />
        <SmurfData />
      </div>
    );
  }
}

export default App;