import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { VansPage } from './pages/VansPage';
import { VanDetialPage } from './pages/VanDetailPage';

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/vans' element={<VansPage />} />
        <Route path='/vans/:id' element={<VanDetialPage />} />
      </Routes>
    </BrowserRouter>
  )
};
