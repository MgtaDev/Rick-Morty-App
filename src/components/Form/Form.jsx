import { useState } from "react";
import validation from '../validation';

export default function Form({login}) {
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState({
        email: "",
        password: ""
    });

    function handleOnChange(event){
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }));
    };

    function handleSubmit(event){
        event.preventDefault();
        login(userData);
    }

  return (
    <div>
        <img src="" alt="" />
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" value={userData.name} name="email" placeholder="Correo electrónico" onChange={handleOnChange}/>
        {errors.email && <p>{errors.email}</p>}
        <br />
        <label htmlFor="password">Password</label>
        <input type="text" value={userData.password} name="password" placeholder="Contraseña" onChange={handleOnChange}/>
        {errors.password && <p>{errors.password}</p>}
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};
