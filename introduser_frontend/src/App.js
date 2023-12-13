import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import LoginPage from './Pages/Login/LoginPage';
import LandingPage from './Pages/Landing/LandingPage';
import { UserProvider } from './Providers/UserProvider';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Router>
          <Routes>
            <Route path='/' element={<ProtectedRoute path="/" component={<LandingPage />} />} />
            <Route path='/login' element={<LoginPage />} />
          </Routes>
        </Router>
      </UserProvider>

    </div>
  );
}

export default App;
