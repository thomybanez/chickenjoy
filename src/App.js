import logo from './logo.svg';
import './App.css';
import chicken from '../src/component/css/image/2pc.webp'

import SignUp from './component/SignUp';

import fries from '../src/component/css/image/fries.png'
import macaroni from '../src/component/css/image/macaroni.png'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>This page is dedicated for die-hard chicken joy fans...</p>
        <a
          className="App-link"
          href="https://www.jollibeedelivery.com/menu/mc-chickenjoy"
          target="_blank"
          rel="noopener noreferrer"
        >
          LANGHAP SARAP CHICKEN JOY
        </a>
        <div style={{display:'flex'}}>
        <img src={chicken} alt="chicken"/>

        <SignUp />
        </div>

        <a
          className='App-link'
          href='https://www.jollibeedelivery.com/menu/mc-fries-sides'
          target="_blank"
          rel="noopener noreferrer">
            SAMAHAN PA NG FRIES AT MACARONI
        </a>
        <img src={fries} alt="fries"/>
        <img src={macaroni} alt="macaroni"/>

      </header>
    </div>
  );
}

export default App;
