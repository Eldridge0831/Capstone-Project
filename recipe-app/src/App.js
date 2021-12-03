import React from 'react';
import Navbar from './components/Navbar';
import RecipeSearch from './components/RecipeSearch';
import NutritionData from './components/NutritionData';
import Home from './components/Home';
import Favorite from './components/Favorite';
import Aboutus from './components/Aboutus';
import Page404 from './components/Page404';
import RecipeCard from './components/RecipeCard';
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
        <Routes>
          <Route path = "/home" element={<Home />} />
          <Route path = "/search" element={<RecipeSearch />} />
          <Route path = "/favorite" element={<Favorite />} />
          <Route path = "/404" element={<Page404 />} />
          <Route path = "/nutrition" element={<NutritionData />} />
          <Route path = "/aboutus" element={<Aboutus />} />
          <Route path = "/recipe" element={<RecipeCard />} />
        </Routes>
      </Router> 
    </div>
  );
}

export default App;
