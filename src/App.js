import './App.scss'
import {Routes, Route} from 'react-router-dom'
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/contact';

function App() {
  return (
    <>
      <Routes>
        <Route path="/my-portfolio/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="/my-portfolio/about.html" element={<About/>} />
          <Route path="/my-portfolio/skills.html" />
          <Route path="/my-portfolio/projects.html" />
          <Route path="/my-portfolio/contact.html" element={<Contact/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
