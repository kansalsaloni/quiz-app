import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/login.jsx';
import Home from './components/Home.jsx';
import Analytics from './components/Analytics.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Login />}/>
        <Route path="/dashboard" exact element={<Home />}/>
        <Route path="/analytics" exact element={<Analytics />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
