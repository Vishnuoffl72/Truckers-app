// import Loginpage from './Loginpage'
import Homepage from './Homepage';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import Postpage from './Postpage';

function App() {


  return (
    <div className='base'>
      {/* <Loginpage /> */}
      <BrowserRouter>
        <Routes basename="/Truckers-app">
          <Route path='/' element={<Homepage />}/>
          <Route path='/Postjob' element={< Postpage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
