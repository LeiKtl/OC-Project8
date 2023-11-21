import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../components/header';
import Home from '../pages/home';
import Sheet from '../pages/accomodationSheet';
import About from '../pages/about';
import Error from '../pages/error'
import Footer from '../components/footer';
import { lodgingList } from '../datas/lodgingList';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
            <Route path="housing" element={<Sheet src="" />}/>
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;