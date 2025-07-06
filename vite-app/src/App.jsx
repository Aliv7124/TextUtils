

import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navba from './Navba';
import Alert from './Alert';
import About from './About';
import Text from './Text';

function App(props) {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState("light");
  const location = useLocation();

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => setAlert(null), 1000);
  };

  const low = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      document.body.style.color = "white";
      showAlert("Dark Mode Enabled", "success");
     let a = document.querySelector("#hi");
      a.innerHTML="Enable Light Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light Mode Enabled", "success");
    let b= document.querySelector("#hi");
      b.innerHtml="Enable Dark Mode";
    }
  };

  const path = location.pathname;

  return (
    <div>
    
      <Navba
        mode={mode}
        low={low}
        showAlert={showAlert}
        MyApp="TextUtils"
        aboutText="About"
        home="Home"
      />

      
     <Alert alert={alert} />

      <Routes>
        <Route path="/" element={<Text showAlert={showAlert} mode={mode} />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
