import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from './HomePage';
import { Apple } from './Apple';
import {NAN} from './PageNotFound';

const App = () => (

  <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/apple' element={<Apple />}></Route>
      <Route path='*' element={<NAN />}></Route>
    </Routes>
  </BrowserRouter>

);
export default App;
