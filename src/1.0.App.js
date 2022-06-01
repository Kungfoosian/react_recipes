import './1.0.App.css';
import Search from './2.0.Search';
import Discover from './2.1.Discover';
import React, { useState } from 'react';

function App(props) {
  const [activeTab, setActiveTab] = useState('discover-form');

  return (
    <React.Fragment>
      <button onClick={() => setActiveTab('search-form')}>Search</button>
      <button onClick={() => setActiveTab('discover-form')}>Discover</button>

      { activeTab === 'search-form' ?
          <Search className='form' id='search-form' />
          : <Discover className='form' id='discover-form' />
      }    
    </React.Fragment>
  );
}

export default App;
