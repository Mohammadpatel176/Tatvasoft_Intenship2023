import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { HomePage } from './HomePage';
import { Apple } from './Apple';
import { NAN } from './PageNotFound';
import { globalStyle } from './contains';

const App = () => (

  <BrowserRouter>
    <div style={{
      ...globalStyle.navbar
    }}>
      <Link to='/' /*</div>style={{ marginLeft: 5, color: 'blue', padding: 20, fontSize: 20 }} */>Home</Link>
      <Link to='apple'>Apple</Link>
      <Link to='/applet'>Page Not found</Link>
    </div>
    <Routes className="Route-style">
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/apple' element={<Apple />}></Route>
      <Route path='*' element={<NAN />}></Route>
    </Routes>
  </BrowserRouter>

);
export default App;
