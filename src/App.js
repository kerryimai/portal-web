import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';


import './App.css';

const App = () => (
  <BrowserRouter>
    <div>

      <Sidebar>
        <Route exact path="/dashboard" component={Dashboard} />
      </Sidebar>
    </div>
  </BrowserRouter>
);


export default App;
