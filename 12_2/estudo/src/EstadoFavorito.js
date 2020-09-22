import React, { Component } from 'react'


class EstadoFavorito extends Component {
    render(){
        const { value, onChange } = this.props


        return(
            <label>
            Diga seu Estado aqui!
            <input
            type='text'
            name='Estado'
            value={value}
            onChange={onChange}></input>
            </label>   
        )
    }
}

export default EstadoFavorito;
