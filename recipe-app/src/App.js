import React from 'react';
import RecipeSearch from './components/RecipeSearch';
import NutritionData from './components/NutritionData';
import Page404 from './components/Page404';



import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        {/* <TopNav/> */}
        <RecipeSearch/>
        <Routes>
          <Route path = "/404" element={<Page404 />} />
          <Route path = "/nutrition" element={<NutritionData />} />
        </Routes>
      </Router> 
      
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
