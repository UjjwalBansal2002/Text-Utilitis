import './App.css';
import Navbar from './components/Navbar';
import Textforms from './components/Textforms';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import React from "react";
// import {  } from 'react-router-dom';
import {Route,Routes,BrowserRouter } from 'react-router-dom';





function App() {
  const [mode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null)
    }, 1200)
  }
  
const removeBodyClass=()=>{
  document.body.classList.remove('bg-light')
  document.body.classList.remove('bg-dark')
  document.body.classList.remove('bg-warning')
  document.body.classList.remove('bg-danger')
  document.body.classList.remove('bg-success')
  document.body.classList.remove('bg-primary')


}
  const toggleMode=(cls)=>{
    removeBodyClass()
    document.body.classList.add('bg-'+cls)
    // if(mode==='light'){
    //   setMode('dark')
    //   showAlert('Dark mode is Enabled', 'success')
    // }
    // else{
    //   setMode('light')
    //   showAlert('Light mode is Enabled', 'success')
    // }
  }

  return (
    <BrowserRouter>
    <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode}></Navbar>
    <Alert alert={alert}></Alert>
      <Routes>
        <Route exact path='' element={<Textforms showAlert={showAlert} heading='Enter the text to analyse'></Textforms>}/>
        <Route exact path='about' element={<About></About>}/>
        {/* <Route path='reactbootstrap' element={<Reactbootstrapui/>}/> */}
        {/* <Route path='materialui' element={<MaterialUI/>}/>
        <Route path='data' element={<Mydata/>}/>
        <Route path='data/:id' element={<Detailslayout/>}/>
        <Route path='custom' element={<Customdata/>}/>
        <Route path='custom/:id' element={<Layout/>}/> */}

      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
