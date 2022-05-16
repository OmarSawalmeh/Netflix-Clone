import './App.css';
import Home from './components/Home';
import FavList from './components/FavList';
import Navbar from './components/Navbar';
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <h1>Welcome to NETFLIX CLONE!</h1>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />       
        <Route path="favMovie" element={<FavList />} />
      </Routes>
    </>

  );
}

export default App;
