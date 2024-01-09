
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import ContactUs from './Pages/ContactUs'
import Features from './Pages/Features'
import  Aggregator from './Pages/Aggregator'
import  Roadmap from './Pages/Roadmap'

import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className=''>
      <Header/>

      <Routes>
        <Route  path="/" element={<Home/>} />
        <Route  path="/about" element={<About/>} />
        <Route  path="/contact" element={<ContactUs/>} />
        <Route  path="/roadmap" element={<Roadmap/>} />
        <Route  path="/features" element={<Features/>} />
        <Route  path="/aggregator" element={<Aggregator/>} />
      </Routes>

      <Footer/>

    </div>
  );
}

export default App;
