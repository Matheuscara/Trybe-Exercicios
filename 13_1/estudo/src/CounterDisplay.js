import React, { Component } from 'react';

class CounterDisplay extends Component {
    shouldComponentUpdate(nextProps, nextState) {
      if (nextProps.value % 3 !== 0) return false;
      return true;
    }
    
    render() {
        console.log(this.props.value)
        return (<div> counter: {this.props.value}</div>);
    }

  }

  export default CounterDisplay;
