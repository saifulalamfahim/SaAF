// import logo from './logo.svg';
import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="App">
     <Header></Header>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
