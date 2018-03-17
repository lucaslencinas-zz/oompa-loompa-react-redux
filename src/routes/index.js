import React from 'react';
import { Route } from 'react-router-dom';
import './index.css';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import OompaDetail from '../components/OompaDetail';

const Router = () => (
  <div>
    <Navbar />
    <main>
      <Route
        exact path="/"
        component={Home}
      />
      <Route
        exact path="/oompa-loompa/:id"
        component={OompaDetail}
      />
    </main>
  </div>
);

export default Router;
