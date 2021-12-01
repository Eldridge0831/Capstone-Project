import React from 'react';
import Navbar from './components/Navbar';
import RecipeSearch from './components/RecipeSearch';
import NutritionData from './components/NutritionData';
import Home from './components/Home';
import Favorite from './components/Favorite';
import Aboutus from './components/Aboutus';
import Page404 from './components/Page404';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <RecipeSearch />
        <Routes>
          <Route path = "/home" element={<Home />} />
          <Route path = "/favorite" element={<Favorite />} />
          <Route path = "/404" element={<Page404 />} />
          <Route path = "/nutrition" element={<NutritionData />} />
          <Route path = "/aboutus" element={<Aboutus />} />
        </Routes>
      </Router> 
    </div>
  );
}

export default App;
