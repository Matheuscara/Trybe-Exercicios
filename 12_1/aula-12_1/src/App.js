import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  
  constructor() {
    super()

    this.click = this.click.bind(this)
  }

  click() {
    console.log(this)
    console.log('clicou')
  }
  
  render () {
    return <button onClick={this.click}>Meu botão</button>
  }
}
export default App;
