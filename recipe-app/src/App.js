import React from 'react';
import RecipeSearch from './components/RecipeSearch';
import NutritionData from './components/NutritionData';
import Page404 from './components/Page404';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Navbar from './components/Navbar';
import RegistrationLogin from './components/registrationLogin';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />{" "}
       
        <RecipeSearch/>
        <Routes>
          <Route path = "/404" element={<Page404 />} />
          <Route path = "/nutrition" element={<NutritionData />} />
          <Route path="/login" element={<RegistrationLogin />} />
        </Routes>
      </Router> 
    </div>
  );
}

export default App;
