
import './App.css';
import logo from "./logo.png"
import Dictionary from './Dictionary';

export default function App() {
  return (
    <div className="App">
      <div className="container">
         <header className="App-header">
            <img src={logo}
             className="App-logo img-fluid" alt="logo" />
         </header>
          <main>
             <Dictionary defaultKeyword="Forest"/>
          </main>
          <footer className="App-footer">
           <small>Coded by <a href="https://github.com/Shalini-jadala" target='_blank' rel="noreferrer">Shalini.J</a>, it is opensourced on 
            <a href="https://github.com/Shalini-jadala/dictionary-react-app" target='_blank' rel="noreferrer" > GitHub</a> and hosted on 
            <a href="https://zesty-selkie-5954d3.netlify.app/" target='_blank' rel="noreferrer"> Netlify.</a>
          </small>
          </footer>

      </div>
    </div>
  );
}


