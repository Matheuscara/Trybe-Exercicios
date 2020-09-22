import React from 'react';
import './App.css'
import Title from './Title'
import Item from './ItemLista'

function App() {
  return (<div className='lista'>
    <Title/>
    <ul>
    <Item/>
    <Item/>
    <Item/>
    <Item/>
    </ul>
    <img width='500px' src='https://bipedepop.files.wordpress.com/2018/08/bc3adpede-pop-para-reflexc3a3o-e-relaxamento-conhec3a7a-lofi-hip-hop-um-estilo-para-introspectividade-e-para-vida-2.gif?w=1200'></img>
  </div>);
}

export default App;