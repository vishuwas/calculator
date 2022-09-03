// import logo from './logo.svg';
import './App.css';
import React from 'react';
// import { render } from '@testing-library/react';

export default class App extends React.Component {

  constructor (props) {
    super (props);
    this.state = {
      variable : 5
    }
    this.abc = this.abc.bind(this);
    this.xyz = this.xyz.bind(this);
  }

  abc() {
    this.setState({
      variable : ++this.state.variable
    })
  }

  xyz() {
    this.setState({
      variable : --this.state.variable
    })
  }

  render () {
    return (
      <>
    <button onClick={() => this.abc()}>Incremental</button>
    {this.state.variable}<br />
    <button onClick={() => this.xyz()}>Decrement</button>    
    </>
    )
  }
}