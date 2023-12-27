import { Routes, Route } from 'react-router-dom';
import HomePage from './components/Home';
import About from './components/About';
import Contacts from './components/Contacts';
import NotFound from './components/NotFound';
import MusicAducation from './components/MusicAducation';
import MainLayout from './layouts/MainLayout';
import ItLayout from './layouts/ItLayout';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route element={<HomePage />} index />
            <Route path="about" element={<About />} />
            <Route path="itAducation" element={<ItLayout />} index></Route>
            <Route path="musicAducation" element={<MusicAducation />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
