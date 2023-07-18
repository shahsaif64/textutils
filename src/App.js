
import './App.css';
import React, {useState} from 'react';

import Navbar from './components/Navbar';
import TextChange from './components/TextChange';
import About from './components/About';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import Alert from './components/Alert';





function App() {
  const [mode, setMode] = useState("info");
  const [alert, setAlert] = useState(null);
  const modeChange =()=>{
    if(mode==='info'){
      setMode('dark');
      document.body.style.backgroundColor='#454B5C';
      document.body.style.color='white';
      showAlert('danger','Dark Mode Enabled');
      document.title='TextUtils - Dark Mode';
    }else{
      setMode('info')
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
      showAlert('success','Light Mode Enabled');
      document.title='TextUtils';
    }
  }




const showAlert=(type,message)=>{
setAlert({
  type:type,
  msge:message
});
setTimeout(() => {
  setAlert(null)
 }, 3000);
}



  return (
    <>
    <Router>
    <Navbar title="TextUtils" mode={mode} modeChange={modeChange}/>
    <Alert resp={alert}/>
     <Routes>
      <Route exact path='/' element={<TextChange title="Write to Change it To" mode={mode} showAlert={showAlert}/>} />
      <Route exact path='/about' element={<About/>} />
      
       
    </Routes>
     
    
    </Router>
     
    </>
    
  );
}

export default App;
