
import './App.css';


import Navbar from './components/Navbar';
import TextChange from './components/TextChange';
import About from './components/About';
import { BrowserRouter , Routes, Route } from 'react-router-dom';



function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar title="TextUtils"/>
     <Routes>
      <Route path='/' element={<TextChange title="Write to Change it To"/>} />
      <Route path='/about' element={<About/>} />
      
       
    </Routes>
     
    
    </BrowserRouter>
     
    </>
    
  );
}

export default App;
