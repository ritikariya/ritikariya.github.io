import React from 'react';
import Display from './Display';
import ButtonPanel from "./ButtonPanel";
import ScientificPanel from './ScientificPanel';
import calculate from '../main/calculate';
import "../index.css";
// import "../ind.css";


export default class App extends React.Component{
  state ={
    total: null,
    next: null,
    operation: null,
    showing: false
  }

  
constructor(props) {  
  super(props);

  this.state = {
     active: 'false'
  };
}
isActive = () => this.state.active;

toggle = () => {
  this.setState({
    active: !this.isActive()
  });

  this.css = `
  html {
    height: 100%;
    font-size: 10px;
  }
  
  body{
    background-color: black;
    margin:0;
    padding: 0;
    font-family: sans-serif;
    height: 100%;
  }
  
  #root{
    height: 100%;
  }
  
  @media (min-width: 400px) and (min-height:400px) {
    html {
      font-size: 20px;
    }
  }
  
  @media (min-width:500px) and (min-height: 500px) {
    html {
      font-size: 30px;
    }
  }
  
  
  @media (min-width:600px) and (min-height: 600px) {
    html {
      font-size: 40px;
    }
  }
  
  @media (min-width:700px) and (min-height: 700px) {
    html {
      font-size: 50px;
    }
  }
  
  
  /* Display.css */
  .component-display {
    background-color: #000;
    color: #fff;
    text-align: right;
    font-weight: 200;
    flex: 0 0 auto;
    width: 100%;
  }
  
  .component-display > div {
    font-size: 2.5rem;
    padding: 0.2rem 0.7rem 0.1rem 0.5rem;
  }
  
  /* App.css */
  .component-app {
    display:flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 100%;
  }
  
  /* ButtonPanel.css */
  .component-button-panel {
    background-color: #000;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex: 1 0 auto;
  }
  
  .component-button-panel > div {
    width: 100%;
    margin-bottom: 1px;
    flex: 1 0 auto;
    display: flex;
  }
  
  /* Button.css */
  .component-button {
    display: inline-flex;
    width: 25%;
    flex: 1 0 auto;
  }
  
  .component-button.wide {
    width: 50%;
  }
  
  .component-button button{
    background-color: #666;
    color: #fff;
    border:0;
    font-size: 1.5rem;
    margin: 0 1px 0 0;
    flex: 1 0 auto;
    padding: 0;
  }
  
  .component-button:last-child button{
    margin-right: 0;
  }
  
  .component-button.orange button {
    background-color: #666;
    color:#fff;
  }
    `;  
}
  handleClick = buttonName => {
    this.setState(calculate(this.state, buttonName))
  }

  render(){
    const { showing } = this.state;
    return (
      <div className = "component-app">
        <Display value ={this.state.next || this.state.total || "0"} />
        <ButtonPanel clickHandler = {this.handleClick} />
        
        <button onClick={() => this.setState({ showing: !showing })}>
        { showing ? 'Scientific Mode' : 'Standard Mode' }
    </button>
    { showing && (
        <ScientificPanel clickHandler={this.handleClick} />
    )}

    <button aria-pressed={this.isActive()} onClick={this.toggle}>
      
      <span aria-hidden="true">{this.isActive() ? 'Light Mode' : 'Dark Mode'}</span>
    </button>
    <style media={this.isActive() ? 'screen' : 'none'}>
      {this.css}
    </style>
        </div>

    )
  }
}