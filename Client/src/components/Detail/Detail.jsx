import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import style from "./Detail.css";


export default function Detail(){
    const {id} = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
    }, [id]);

    return(
        <div className='wrapper'>
              <div className='container'>
            {
                <div className='detail'>
                    <img src={character?.image} alt={character.name} />
                    <h1>{character?.name}</h1>
                    <h2>Status: {character?.status}</h2>
                    <h2>Species: {character?.species}</h2>
                    <h2>Gender: {character?.gender}</h2>
                    <h2>Origin: {character?.origin?.name}</h2>
                </div>
            }
        </div>
        </div>
       
    );
};