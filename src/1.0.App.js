import './1.0.App.css';
import Search from './2.0.Search';
import Discover from './2.1.Discover';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App(props) {
  const [activeTab, setActiveTab] = useState('search-form');

  return (
    <React.Fragment>
      <div className='button-container'>
        <button onClick={() => setActiveTab('search-form')}>Search</button>
        <button onClick={() => setActiveTab('discover-form')}>Discover</button>
      </div>

      { activeTab === 'search-form' ?
          <Search className='form' id='search-form' />
          : <Discover className='form' id='discover-form' />
      }    
    </React.Fragment>
  );
}

export default App;
