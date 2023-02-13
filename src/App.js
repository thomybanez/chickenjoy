import logo from './logo.svg';
import './App.css';
import chicken from '../src/component/css/image/2pc.webp'
import fries from '../src/component/css/image/fries.png'
import macaroni from '../src/component/css/image/macaroni.png'
import jollyh from '../src/component/css/image/jollyh.png'

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
        <img src={chicken} alt="chicken"/>
        <a
          className='App-link'
          href='https://www.jollibeedelivery.com/menu/mc-fries-sides'
          target="_blank"
          rel="noopener noreferrer">
            SAMAHAN PA NG FRIES AT MACARONI
        </a>
        <img src={fries} alt="fries"/>
        <img src={macaroni} alt="macaroni"/>

        
        <a
          className='App-link'
          href='https://www.jollibeedelivery.com/menu/mc-jolly-hotdog-pies-p2'
          target="_blank"
          rel="noopener noreferrer">
            ORDERAN MO NA DIN NG JOLLY HOTDAWG
        </a>
        <img src={jollyh} alt="jollyh"/>
      </header>
    </div>
  );
}

export default App;
