import React, { Component } from 'react';

class UltimoEmprego extends Component {
  constructor() {
    super();

    this.handleAreaChange = this.handleAreaChange.bind(this);

    this.state = {
        Resumo:'',
        Cargo:'',
        Descrição:'',
    };
  }

  handleAreaChange({ target }) {
    const { name } = target;
    const value = target.value;
    this.setState({
      [name]: value,
    });
  }

  render(){
      return(
        <fieldset>
            <label>
            Resumo do Currículo:
            <textarea
            name='Resumo'
            value={this.state.Resumo}
            onChange={this.handleAreaChange}
            maxLength='1000'
            required='required'></textarea> 
            </label>

            <label>
            Cargo:
            <textarea
            name='Cargo'
            value={this.state.Cargo}
            onChange={this.handleAreaChange}
            maxLength='40'
            required='required'></textarea> 
            </label>

            <label>
            Descrição do Cargo:
            <textarea
            name='Descrição'
            value={this.state.Descrição}
            onChange={this.handleAreaChange}
            maxLength='500'
            required='required'></textarea> 
            </label>
        </fieldset>
      )
  }
}
export default UltimoEmprego;