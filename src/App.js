import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Header from '/../myreact/src/Components/Header'
import Footer from '../../myreact/src/Components/Footer'
import Home from '../../myreact/src/Views/Home'
import About from '../../myreact/src/Views/About'
import Product from '../../myreact/src/Views/Product'

function App() {
  return (
      <div className="relative pb-10 min-h-screen">
        <Router>

          <Header />

          <div className="p-3">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/products/:id">
                <Product />
              </Route>
            </Switch>
          </div>

          <Footer />

        </Router>
      </div>
  );
}

export default App;
