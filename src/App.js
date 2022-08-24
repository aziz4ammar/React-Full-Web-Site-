import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { tab } from './Data';
import List from './components/List';
import Head from './components/Head';
import Cart from './components/Cart';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
function App() {
  const [info, setInfo] = useState(tab)
  return (
    <div className='ap'>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<><Head/><div className="App"><List info={info}/></div></>}/>
    <Route path='/cart' element={<Cart/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  
  );
}

export default App;
