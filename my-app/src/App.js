import logo from './logo.svg';
import './App.css';
import { Header } from './Components/Header';
import { Goods } from './Components/Goods';
import Banners from './Components/Banners';

function App() {
  return (
    <div className="App">
      <Header />
      <Goods />
      <Banners />
    </div>
  );
}

export default App;
