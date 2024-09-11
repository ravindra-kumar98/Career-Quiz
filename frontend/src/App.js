import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './pages/signup/Signup';
import Signin from './pages/signin/Signin';
import Profile from './pages/profile/Profile';

function App()
{
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signup />} exact />
        <Route path='/signin' element={<Signin />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
