import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { tab } from './Data';
import List from './components/List';
import Head from './components/Head';
import Mcart from './components/Mcart';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Foot from './components/Foot';
function App() {
  const [info, setInfo] = useState(tab)
  return (
    <div className='ap'>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<><Head/><div className="App"><List info={info}/></div></>}/>
    <Route path='/cart' element={<Mcart/>}/>
    </Routes>
    </BrowserRouter>
    <br/>
    <br/>
    <Foot/>
    </div>
  
  );
}

export default App;
