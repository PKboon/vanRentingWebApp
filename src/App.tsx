import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<div>Home</div>} />
        <Route path='/about' element={<div>About</div>} />
      </Routes>
    </BrowserRouter>
  )
};
