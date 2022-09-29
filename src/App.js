import './App.scss'
import {Routes, Route} from 'react-router-dom'
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <>
      <Routes>
        <Route path="/my-portfolio/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="/my-portfolio/about" element={<About/>} />
          <Route path="/my-portfolio/skills" />
          <Route path="/my-portfolio/projects" />
          <Route path="/my-portfolio/contact" />
        </Route>
      </Routes>
    </>
  );
}

export default App;
