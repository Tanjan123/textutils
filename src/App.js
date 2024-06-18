import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import Alert from './components/Alert';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light'); // State to manage light/dark mode
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#343a40';
      showAlert("Dark mode is enabled", "success");
      document.title = "Textutils - Dark Mode";
    } else {
      setMode('light');
      document.body.style.backgroundColor = '#ffffff';
      showAlert("Light mode is enabled", "success");
      document.title = "Textutils - Light Mode";
    }
  };

  return (
    <>
      {/* <Router> */}
        <Navbar title="Sample" mode={mode} about="About Us" toggleMode={toggleMode} />
        <div className="container my-3">
          <Alert alert={alert} />
          {/* <Routes> */}
            {/* <Route path="/about" element={<About mode={mode} />} /> */}
            {/* <Route path="/" element={} /> */}
            <TextForm showAlert={showAlert} heading="Heading" mode={mode} />
          {/* </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
  
}

export default App;
