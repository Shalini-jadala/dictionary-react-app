
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
             <Dictionary />
          </main>
          <footer className="App-footer">
           <small>Coded by Shalini.J and it is opensourced on 
            <a href="https://github.com/Shalini-jadala/dictionary-react-app" 
            target="blank"> GitHub</a></small>
          </footer>

      </div>
    </div>
  );
}


