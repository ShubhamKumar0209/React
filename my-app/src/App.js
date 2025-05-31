
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import './App.css';
import About from './components/About';
import React, { useState } from 'react'

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor='black';
      showAlert("Dark mode enabled",'success');
      document.title="TextUtils-DarkMode";
    }
    else {
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode enabled",'success');
      document.title="TextUtils-LightMode";
    }
  }
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert(
      {msg:message,type:type}
    );
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  return (
    <>
      <Navbar title="TextUtils" aboutText="About us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
        {/* <About /> */}
        <TextForm heading="Enter text to analyze" mode={mode} showAlert={showAlert} />
      </div>
    </>
  );
}

export default App;
