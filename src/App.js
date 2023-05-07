// import logo from './logo.svg';
import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Projects from './components/Projects/Projects';
import Services from './components/Services/Services';
import Animation from './components/Animation/Animation';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Services/>
     <Projects></Projects>
      <About></About>
      <Animation></Animation>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
