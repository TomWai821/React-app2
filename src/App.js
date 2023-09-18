import React, {useState} from 'react'
import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import About from './components/About'
import Alert from './components/Alerts'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  const [Mode, setMode] = useState('light'); //wether dark mode is enable or not
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    
    setTimeout(()=>{
      setAlert(null)
    },1500) //1000ms = 1s
  }

  const toggleMode = () => {
    if(Mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black'
      showAlert('Dark mode has been enabled', 'success');
      document.title = 'TextUtils-Dark Mode'
      /* change website title
      setInterval(() => {
        document.title = 'TextUtils is Amazing Mode'
      }, 1500);
      */
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert('Light mode has been enabled', 'success')
      document.title = 'TextUtils-Light Mode'
    }
  }

  return (
    <>
    <Router>
    <Navbar title='textUtils' mode={Mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
      <div className='container my-3'>
        <Routes>
              <Route path="/about" element={<About mode={Mode} toggleMode={toggleMode}/>} />
              <Route path="/" element={<TextForm showAlert={showAlert} heading='Enter the text to analyze below' mode={Mode} toggleMode={toggleMode}/>} />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
