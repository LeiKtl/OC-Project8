import './router.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../components/header';
import Home from '../pages/home';
import Sheet from '../pages/housingSheet';
import About from '../pages/about';
import Error from '../pages/error'
import Footer from '../components/footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/accomodationSheet/:id" element={<Sheet />}/>
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;