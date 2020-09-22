import React from 'react';
import ReactDOM from 'react-dom';
import WelcomeName from './Welcome'
import Comment from './Coment'

function Post() {
  return <Comment user='Matheus' text='Com certeza isso é muito legal na moral, vou aprender isso de véz' date='27/11'/>
}

ReactDOM.render(
  <Post />,
  document.getElementById('root')
);

