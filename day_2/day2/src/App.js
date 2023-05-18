import logo from './logo.svg';
import './App.css';
import { HomePage } from './HomePage';
import { Apple } from './Apple';

const App = () => (

  <BrowserRouter>
    <div>
      <Link to='/'>Home</Link>
      <Link to='/apple'>Apple</Link>
    </div>
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/apple' element={<Apple />}></Route>
    </Routes>
  </BrowserRouter>

);
export default App;
