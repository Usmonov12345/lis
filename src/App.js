import './App.css';
import Header from './componnents/header/header'
import Main from './componnents/main/main'
import Footer from './componnents/footer/footer'
import { Routes , Route }from 'react-router-dom'
import Home from './componnents/Home/Home';
import About from './componnents/About/About';
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/Main' element={<Main/>}></Route>
        <Route path='/About' element={<About/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
