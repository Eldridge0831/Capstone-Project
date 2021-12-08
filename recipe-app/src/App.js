import React, { Component } from 'react';
import Navbar from './components/Navbar';
import SideNav from './components/SideNav'
import RecipeSearch from './components/RecipeSearch';
import NutritionData from './components/NutritionData';
import Home from './components/Home';
import Favorite from './components/Favorite';
import Aboutus from './components/Aboutus';
import Page404 from './components/Page404';
import RecipeCard from './components/RecipeCard';
import ItemCard from './components/ItemCard';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { apiResponse: "" };
  // }

  // callAPI() {
  //   fetch("http://localhost:9000/testAPI")
  //     .then(res => res.text())
  //     .then(res => this.setState({ apiResponse: res }));
  // }

  // componentWillMount() {
  //   this.callAPI();
  // }

  render () {
    return (
      <div className="App">
        {/* <p className="App-Intro">{this.state.apiResponse}</p> */}
        <Router>
          <Navbar />
          <SideNav />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/search" element={<RecipeSearch />} />
            <Route path="/favorite" element={<Favorite />} />
            <Route path="/404" element={<Page404 />} />
            <Route path="/nutrition" element={<NutritionData />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/recipe" element={<RecipeCard />} />
            <Route path="/solo" element={<ItemCard />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

  export default App;
