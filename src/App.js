import './App.scss'
import {Routes, Route} from 'react-router-dom'
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <>
      <Routes>
        <Route path="my-portfolio/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="about" element={<About/>} />
          <Route path="skills" />
          <Route path="projects" />
          <Route path="contact" />
        </Route>
      </Routes>
    </>
  );
}

export default App;
