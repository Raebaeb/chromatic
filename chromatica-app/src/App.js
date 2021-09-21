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
  const [toggleFetch, setToggleFetch] = useState(false);

  useEffect( () => {
    const fetchPalettes = async () => {
      const response = await axios.get(baseURL, config)
      setPalettes(response.data.records)
    }
    fetchPalettes();
  },[toggleFetch])


  return (
    <div className="App">
      <header>
        <nav>
          <Link to='/new'>create palette</Link>
        </nav>
          <Link to='/'>Home</Link>
      </header>
      <main>
        <Route path='/' exact>
        {palettes.map((palette) => (
          <Palette key={palette.id} palette={palette} />
        ))}
        </Route>
        <Route path='/new' >
          <New setToggleFetch={setToggleFetch}/>
        </Route>
        <Route path='/edit/:id'>
          <Edit />
        </Route>
      </main>
    </div>
  );
}

export default App;
