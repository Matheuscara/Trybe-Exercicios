import React, { Component } from 'react'
import EstadoFavorito from './EstadoFavorito'
import Nome from './nome'
import './App.css'

class Form extends Component {
    constructor() {
    super()
    
    this.handleAreaChange = this.handleAreaChange.bind(this)

    this.state = {
        Nome:'',
        DataDeNascimento:'',
        Estado:'',
        TextArea:'',
        }
    }

    handleAreaChange({ target }) {
        const { name } = target;
        const value = target.value
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div>
                <h1>Formulario de Estudo em React</h1>
                <form className='form'>

                    <Nome 
                    name='nome'
                    value={this.state.Nome}
                    onChange={this.handleAreaChange}
                    />

                    <label>
                        Diga ssua data de nascimento aqui!
                        <input
                        type='date'
                        name='DataDeNascimento'
                        value={this.state.DataDeNascimento}
                        onChange={this.handleAreaChange}></input>
                    </label>
                    
                    <EstadoFavorito 
                    name='Estado'
                    value={this.state.Estado}
                    onChange={this.handleAreaChange}
                    />

                    <label>
                        Digite um texto motivacional para min msm!
                        <textarea
                        name='TextArea'
                        value={this.state.textArea}
                        onChange={this.handleAreaChange}></textarea>
                    </label>

                </form>
            </div>
        )
    }
}

export default Form;
