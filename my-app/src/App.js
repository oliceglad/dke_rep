import logo from './logo.svg';
import './App.css';
import { Header } from './Components/Header';
import { Goods } from './Components/Goods';
import Banners from './Components/Banners';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Goods />
      <Banners />

      <Footer />
    </div>
  );
}

export default App;
