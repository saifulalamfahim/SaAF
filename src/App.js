import logo from './logo.svg';
import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
     <Header></Header>
      <About></About>
      <Contact></Contact>
    </div>
  );
}

export default App;
