import './App.css';
import Header from './component/Header';
import Home from './pages/Home';
import './bootstrap.min.css';
import Product from './compotents/Product';
import Summary from './compotents/Summary';
import About from './compotents/About';
import Footer from './component/Footer';




function App() {
  return (
    <div>
      <Header/>
    <Home/>
    <Product/>
    <Summary/>
    <About/>
    <Footer/>
    </div>
  );
}

export default App;
