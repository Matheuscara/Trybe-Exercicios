import React from 'react'

function Welcome(props) {
    return <h1>Olá, {props.name}</h1>;
  }

  function WelcomeName() {
    return (
      <div>
        <Welcome name="Matheus" />
        <Welcome name="Alessandra" />
        <Welcome name="Lyon" />
      </div>
    );
  }

  export default WelcomeName;