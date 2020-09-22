import React, { Component } from 'react'

class Pokemon extends Component {
    render() {
      const {name, type, averageWeight, image } = this.props
  
      return (
        <div className='elements'>
            <img className='image' src={image} alt="new"/><br/>
            {name}<br/>
            {type}<br/>
            Average Weight:  {averageWeight}Kg<br/>
        </div>
      )
    }
  }

  // eslint-disable-next-line
  export default Pokemon