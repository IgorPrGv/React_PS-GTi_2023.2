import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './index.css';
import Main from './Pages/Main';
import Sobre from './Pages/Sobre';
import Contato from './Pages/Contato';
import Quiz from './Pages/Quiz';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/sobre' element={<Sobre/>}></Route>
        <Route path='/contato' element={<Contato/>}></Route>
        <Route path='/quiz' element={<Quiz/>}></Route>  
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
