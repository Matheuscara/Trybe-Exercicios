import React, { Component } from 'react'


class Nome extends Component {
    render(){
        const { value, onChange } = this.props


        return(
        <label>
            Diga seu nome aqui!
            <input 
            type='text'
            name='Nome' 
            value={value} 
            onChange={onChange}></input>
        </label>
        )
    }
}

export default Nome;
