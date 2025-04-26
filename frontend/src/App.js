import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import LandingPage from './pages/landing.jsx';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
