import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import HomePage from './pages/HomePage';
import HeaderBar from './components/HeaderBar';
import FooterBar from './components/FooterBar';
// React code loosely based on Oregon State CS290 Assignment 9 Accessed 5/6/24
// https://canvas.oregonstate.edu/courses/1945984/assignments/9475930?module_item_id=23863281

function App() {
  const [placeholder1, placeholder2] = useState()
  return (
    <div className="App">
      <script src="https://kit.fontawesome.com/caec3d6d9a.js" crossorigin="anonymous"></script>
      <header className="App-header">

        <Router>
          <div className="app_header">
            <Routes>
              <Route path="/" element={<HomePage placeholder2={placeholder2} />}/>
              <Route path="/allbreeds" element={<HomePage placeholder2={placeholder2} />}/>
              <Route path="/filteredbreeds" element={<HomePage placeholder2={placeholder2} />}/>
              <Route path="/comparebreeds" element={<HomePage placeholder2={placeholder2} />}/>

            </Routes>
          </div>
        </Router>
      </header>
      <footer><p>&copy;2024 Mathew, Kevin</p></footer>
    </div>
  );
}

export default App;
