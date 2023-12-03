import { Routes, Route } from 'react-router-dom';
import HomePage from './components/Home';
import About from './components/About';
import Contacts from './components/Contacts';
import NotFound from './components/NotFound';
import MainLayout from './layouts/MainLayout';
import './App.css';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route element={<HomePage />} index />
          <Route path="about" element={<About />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
