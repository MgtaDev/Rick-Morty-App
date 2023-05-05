import './App.css';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import About from './components/About/About'
import Detail from './components/Detail/Detail';
import React, { useState } from 'react';
import axios from 'axios';
import {Route, Routes} from 'react-router-dom';

function App() {
   const [characters, setCharacters] = useState([]);

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   };

   const onClose = (id) => {
      const characterFiltered = characters.filter(character => character.id !== parseInt(id))
      setCharacters(characterFiltered)
   };

   return (
      <div className='App'>
         <Nav onSearch = {onSearch}/>
         <Routes>
            <Route  path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
         </Routes>
      </div>
   );
   
};

export default App;
