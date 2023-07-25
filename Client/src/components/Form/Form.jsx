import { useState } from "react";
import validation from "../validation";
import style from './Form.module.css'
import Logo from '../assets/Logo.png'

export default function Form({ login }) {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  function handleOnChange(event) {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
    setErrors(
      validation({
        ...userData,
        [event.target.name]: event.target.value,
      })
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    login(userData);
  }

  return (
    <div className={style.wrapper}>
      <img src={Logo} alt="" />
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          value={userData.name}
          name="email"
          placeholder="Correo electrónico"
          onChange={handleOnChange}
        />
        {errors.email && <p>{errors.email}</p>}
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={userData.password}
          name="password"
          id="password"
          placeholder="Contraseña"
          onChange={handleOnChange}
        />
        {errors.password && <p>{errors.password}</p>}
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}
