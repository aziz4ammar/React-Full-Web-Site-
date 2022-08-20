import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { tab } from './Data';
import List from './components/List';
// import { BrowserRouter,Route,Routes } from 'react-router-dom';
function App() {
  const [info, setInfo] = useState(tab)
  return (
    <div className="App">*
    <List info={info}/>
    </div>
  );
}

export default App;
