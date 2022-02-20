import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react';
import Alert from "./components/Alert";
import Contact from "./components/Contact";
import {
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); //set the mode dark or light 
  const [myStyle, setMyStyle] = useState({
    color: 'black',
    backgroundColor: 'white',
  });

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleDarkMode= ()=>{
    if(myStyle.color === "black"){
      setMyStyle({
        color: 'white',
        backgroundColor: 'black',
      })
      // setBtnText("Light")
    }
    else{
      setMyStyle({
        color: 'black',
        backgroundColor: 'white',
      })
      // setBtnText("Dark")
    }
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      toggleDarkMode();
      showAlert("Dark Mode is enabled","primary")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      toggleDarkMode();
      showAlert("Light Mode is enabled","primary")
    }
  }

  

  return (
    <div>
    <Navbar title="TextBay" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
      <Routes>
        <Route path="/" element={<TextForm heading="Enter your Text" myStyle={myStyle} showAlert={showAlert}/>} />
        <Route path="contact" element={<Contact/>} />
      </Routes>
    </div>
  );
}

export default App;
