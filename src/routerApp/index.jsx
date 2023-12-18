import './routerApp.scss'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from '../components/header';
import Home from '../pages/home';
import Sheet from '../pages/housingSheet';
import About from '../pages/about';
import Error from '../pages/error'
import Footer from '../components/footer';

function RouterApp() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/accomodationSheet/:id" element={<Sheet />}/>
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to='/error'/>} />
          <Route path="/error" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default RouterApp;