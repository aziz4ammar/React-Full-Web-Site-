import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { tab } from './Data';
import List from './components/List';
import Head from './components/Head';
// import { BrowserRouter,Route,Routes } from 'react-router-dom';
function App() {
  const [info, setInfo] = useState(tab)
  return (
    <div className='ap'>
      <div className='ba'>
      <Head/>
      </div>
    <div className="App">
    <List info={info}/>
    </div>
    </div>
  );
}

export default App;
