import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      
      <Navbar/>
        <Routes>
          <Route path='/' element={<h2>YO</h2>} />
        </Routes>
    </Router>
  );
}

export default App;
