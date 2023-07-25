import './App.css';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import About from './components/About/About'
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form'
import Favorites from './components/Favorites/Favorites'
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import swal from 'sweetalert';



function App() {
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);
   const location = useLocation();
   const navigate = useNavigate();

   const onSearch = async (id) => {
      try {
         const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         }

      } catch (error) {
         swal('ERROR','¡No hay personajes con este ID!','error');
      }
   };

   const login = async (userData) => {
      try {
         // const URL = 'http://localhost:3001/rickandmorty/login/';
         // const { email, password } = userData;
         // const { data } = await axios.get(URL + `?email=${email}&password=${password}`)
         // const { access } = data;

         // setAccess(data);
         // access && navigate('/home');
         navigate('/home')

      } catch (error) {
         swal('ERROR','No ha sido posible loguearte correctamente','error')
      }


   }

   // useEffect(() => {
   //    !access && navigate('/');
   // }, [access]);


   const onClose = (id) => {
      const characterFiltered = characters.filter(character => character.id !== parseInt(id))
      setCharacters(characterFiltered)
      swal("SUCCESS", 'Character deleted', 'success')
   };

   return (
      <div className='App'>

         {
            location.pathname !== "/" ? <Nav onSearch={onSearch} /> : null
         }

         <Routes>
            <Route path='/' element={<Form login={login} />} />
            <Route path='/home' element={<Cards characters={characters} setCharacters={setCharacters} onClose={onClose} />} />
            <Route path='/about' element={<About />} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='/favorites' element={<Favorites />} />
         </Routes>
      </div>
   );

};

export default App;
