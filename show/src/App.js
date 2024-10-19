import logo from './logo.svg';
import './App.css';
import Navbar from './navbar';
import { GiHamburgerMenu } from "react-icons/gi";
import AppHeader from './AppHeader';

function App() {
  return (
    <div className="App">
      <header className="AppBody">
        <AppHeader />

      </header>
      <Navbar />

    </div>
  );
}

export default App;
