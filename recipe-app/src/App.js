import React from 'react';
import RecipeSearch from './components/RecipeSearch';
import Page404 from './components/Page404';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <TopNav/> */}
        <RecipeSearch/>
        <Routes>
          <Route path = "/404" element={<Page404 />} />
        </Routes>
      </Router> 
    </div>
  );
}

export default App;
