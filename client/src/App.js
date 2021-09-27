import { React, useEffect, useState } from 'react';
import axios from 'axios';
import { baseURL, config } from './services'
import { Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Palette from './components/Palette';
import Form from './components/Form';
import Footer from './components/Footer';

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
      <Nav />
      <main>
        <Route path='/' exact>
        {palettes.map((palette) => (
          <Palette key={palette.id} palette={palette} setToggleFetch={setToggleFetch}/>
        ))}
        </Route>
        <Route path='/new' >
          <Form setToggleFetch={setToggleFetch}/>
        </Route>
        <Route path='/edit/:id'>
          <Form setToggleFetch={setToggleFetch} palettes={palettes}/>
        </Route>
      </main>
      <Footer />
    </div>
  );
}

export default App;
