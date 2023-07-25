import Pic from '../assets/Myphoto.jpeg'
import Gmail from '../assets/gmail.png'
import GitHub from '../assets/github.png'
import Linkedin from '../assets/linkedin.png'
import style from './About.module.css'

export default function About(){
    return(
        <div className='wrapper'>
        <div className='container'>
      
          <div className='detail'>
              <img src={Pic} alt='img' />
              <h1>@MgtaDev</h1>
              <h2>Status: Alive</h2>
              <h2>Species: Human</h2>
              <h2>Gender: Male</h2>
              <h2>Origin: Earth (C-137)</h2>
          </div>
          <p style={{color:'white'}}>Contact me!</p>
          <a className={style.icons} href=""> <img src={Linkedin} alt="img" /></a>
          <a className={style.icons} href="https://github.com/MgtaDev" target='_blank'> <img src={GitHub}alt="img" /></a>
          <a className={style.icons} href=""> <img src={Gmail} alt="img" /></a>

  </div>
  </div>
    );
};