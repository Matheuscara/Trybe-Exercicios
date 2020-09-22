import React, { Component } from 'react';

class DadosPessoais extends Component {
    constructor() {
        super()

        this.handleAreaChange = this.handleAreaChange.bind(this)

        this.state = {
            Nome:'',
            Email:'',
            Cpf:'',
            Endereço:'',
            Cidade:'',
            Estado:'',
        }
    }

    handleAreaChange({target}) {
        const { name } = target;
        const value = target.value
        this.setState({
            [name]:value
        })
    }

    render() {
        return(

            <fieldset>
                <label>
                    Insi:
                    <input
                    type='text'
                    name='Nome'
                    value={this.state.Nome}
                    onChange={this.handleAreaChange}
                    maxLength='40'
                    required='required'></input>
                </label>
                <label>
                    Email:
                    <input
                    type='text'
                    name='Email'
                    value={this.state.Email}
                    onChange={this.handleAreaChange}
                    maxLength='50'
                    required='required'></input>
                </label>
                <label>
                    CPF:
                    <input
                    type='number'
                    name='Cpf'
                    value={this.state.Cpf}
                    onChange={this.handleAreaChange}
                    maxLength='11'
                    required='required'></input>
                </label>
                <label>
                    Endereço:
                    <input
                    type='text'
                    name='Endereço'
                    value={this.state.Endereço}
                    onChange={this.handleAreaChange}
                    maxLength='200'
                    required='required'></input>
                </label>
                <label>
                    Cidade:
                    <input
                    type='text'
                    name='Cidade'
                    value={this.state.Cidade}
                    onChange={this.handleAreaChange}
                    maxLength='28'
                    required='required'></input>
                </label>
                <label>
                    Estado:
                    <input
                    type='text'
                    name='Estado'
                    value={this.state.Estado}
                    onChange={this.handleAreaChange}
                    maxLength='15'
                    required='required'></input>
                </label>
            </fieldset>
        )
    }
}

export default DadosPessoais;