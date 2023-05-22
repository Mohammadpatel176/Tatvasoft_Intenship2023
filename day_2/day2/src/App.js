import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { HomePage } from './HomePage';
import { Apple } from './Apple';
import { NAN } from './PageNotFound';

const App = () => (

  <BrowserRouter>
    <Link to='/' style={{ display: "flex", padding: 5, columnGap: 10, }}>Home</Link>
    <Link to='apple' style={{ display: "flex", padding: 5, columnGap: 10, }}>Apple</Link>
    <Link to='/applet' style={{ display: "flex", padding: 5, columnGap: 10, }}>Page not found</Link>
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/apple' element={<Apple />}></Route>
      <Route path='*' element={<NAN />}></Route>
    </Routes>
  </BrowserRouter>

);
export default App;
