import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import Product from './components/Product';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Cart from './components/Cart';
import CheckOut from './components/CheckOut.jsx';
import { Switch, Route } from 'react-router-dom';

import './App.css';


function App() {
  return (
    <div className="m-auto">
       <Navbar />
       <Switch>
         <Route exact path='/' component={Home} />
         <Route exact path='/products' component={Products} />
         <Route exact path='/products/:id' component={Product} />
         <Route exact path='/about' component={About} />
         <Route exact path='/contact' component={Contact} />
         <Route exact path='/cart' component={Cart} />
         <Route exact path='/checkout' component={CheckOut} />

       </Switch>
    </div>
  );
}

export default App;
