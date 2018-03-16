import React from 'react';
import { Route, Link } from 'react-router-dom'
import Home from '../components/Home'
import OompaDetail from '../components/OompaDetail'

const Router = () => (
  <div>
    <Link to="/">Back to home</Link>
    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/oompa-loompa/:id" component={OompaDetail} />
    </main>
  </div>
)

export default Router;
