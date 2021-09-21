import { useEffect, useState } from 'react';
import axios from 'axios';
import { baseURL, config } from './services'
import { Link, Route } from 'react-router-dom';
import './App.css';
import Palette from './components/Palette';
import New from './components/New';
import Edit from './components/Edit';

function App() {

  const [palettes, setPalettes] = useState([]);

  useEffect( () => {
    const fetchPalettes = async () => {
      const response = await axios.get(baseURL, config)
      setPalettes(response.data.records)
      console.log(response.data.records)
    }
    fetchPalettes();
  },[])


  return (
    <div className="App">
      <header>
        <nav>
          <Link to='/new'>create palette</Link>
        </nav>
          <Link to='/'></Link>
      </header>
      <main>
        {palettes.map((palette) => (
          <Palette key={palette.id} palette={palette} />
        ))}
        <Route path='/new' >
          <New />
        </Route>
        <Route path='/edit/:id'>
          <Edit />
        </Route>
      </main>
    </div>
  );
}

export default App;
