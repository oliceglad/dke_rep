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
      <Banners />
      <h2>Акции</h2>
      <Goods />
      
    <h2>Контакты</h2>
    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae80330bc1cf33cb44cda13275a4659e1b09885fc7110940211f3fa1f69b0664b&amp;source=constructor" width="649" height="416" frameborder="0"></iframe>
      <Footer />
    </div>
  );
}

export default App;
