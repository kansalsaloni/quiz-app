import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/login.jsx';
import Home from './components/Home.jsx';
import Analytics from './components/Analytics.jsx';
import ThankyouPopup from './components/ThankyouPopup.jsx';
import QaLiveQuiz from './components/QaLiveQuiz.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Login />}/>
        <Route path="/dashboard" exact element={<Home />}/>
        <Route path="/analytics" exact element={<Analytics />}/>
        <Route path="/livequiz" exact element={<QaLiveQuiz />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
