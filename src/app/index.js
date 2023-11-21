import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from '../components/header';
import Home from '../pages/home';
import Footer from '../components/footer'

function App() {
  return (
    <div className="Router">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;