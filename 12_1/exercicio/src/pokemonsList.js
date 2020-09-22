import React, { Component } from 'react'
import data from './data'
import Pokemon from './pokemon'

class PokemonsList extends Component {
  render() {
      return (
        <div>
          <h1 className='title'>Lista dos Melhores Pokemons do Universo</h1>
          <div><input type='text' onChange=''></input></div>
          <div className='lista'>
          {data.map((pokemon) => {
            return <Pokemon 
              id={pokemon.id} 
              name={pokemon.name} 
              type={pokemon.type}
              image={pokemon.image}
              averageWeight={pokemon.averageWeight.value}
            />
          })}
          </div>
        </div>
      )
    }
  }

export default PokemonsList;