import './App.css';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import About from './components/About/About'
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form'
import Favorites from './components/Favorites/Favorites'
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {Route, Routes, useNavigate, useLocation} from 'react-router-dom';


function App() {
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);
   const location = useLocation();
   const EMAIL = 'kokmora50@hotmail.com';
   const PASSWORD = 'Henry1';
   const navigate = useNavigate();

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   };

   const login = (userData) => {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   const onClose = (id) => {
      const characterFiltered = characters.filter(character => character.id !== parseInt(id))
      setCharacters(characterFiltered)
   };

   return (
      <div className='App'>
         
         {
            location.pathname !== "/" ? <Nav onSearch = {onSearch}/> : null
         }
          
         <Routes>
            <Route path='/' element={<Form login={login}/>} />
            <Route  path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='/favorites' element={<Favorites/>}/>
         </Routes>
      </div>
   );
   
};

export default App;
