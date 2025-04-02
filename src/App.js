import logo from './esfera.png';
import logo2 from './shenlong.png';
import bruno from './Bruno-Messias.png'
import goku from './goku.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={bruno} className="bruno" alt="logo"/>
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo2} className="App-logo" alt="logo" />
        <img src={goku} className="" alt="logo" />
        
      </header>
    </div>
  );
}

export default App;
