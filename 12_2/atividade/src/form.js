import React, { Component } from 'react';
import DadosPessoais from './DadosPessoais.js';
import UltimoEmprego from './UltimoEmprego.js';
import './App.css'

class Form extends Component {  
  render() {
    return (
      <div>
        <h1>Formulario para Atividade</h1>
        <form className='formularios'>
          <DadosPessoais/>
          <UltimoEmprego/>
        </form>
      </div>
    );
  }
}

export default Form;
