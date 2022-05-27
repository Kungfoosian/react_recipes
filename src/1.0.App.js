import logo from './logo.svg';
import './1.0.App.css';
import Search from './2.0.Search';
import Discover from './2.1.Discover';
import React from 'react';

function App(props) {
  return (
    <React.Fragment>
      <button>Search</button>
      <button>Discover</button>
      <Search class='form'/>
      <Discover class='form' />
    </React.Fragment>
  );
}

export default App;
