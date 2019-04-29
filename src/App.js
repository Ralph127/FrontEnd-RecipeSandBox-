import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/NavigationBar";
import RecipeBoard from "./components/RecipeBoard"
import { BrowserRouter  as Router, Route } from "react-router-dom";
import addRecipe from "./components/Recipe/AddRecipe";
import { Provider } from "react-redux";
import store from "./store";
import Login from './components/Login';
import Home from './components/Home';
import Edamam from './components/ExternalApi/EdamamApi';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <NavigationBar />
              <Route exact path ="/login" component={ Login } />
              <Route exact path ="/home" component = { Home } />
              <Route exact path = "/recipes" component = { RecipeBoard } />
              <Route exact path = "/addRecipe" component = { addRecipe } />
              <Route exact path ="/search" component = { Edamam } />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
