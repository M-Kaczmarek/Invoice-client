import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Navigation from './components/Navigation/Navigation'
import Home from './components/SectionHome/Home'

function App() {
  return (
    <BrowserRouter>
      <>
        <Navigation />
        <Route exact path="/" component={Home} />
        <Route path="/find" />
        <Route path="/add" />
        <Route path="/update" />
        <Route path="/delete" />

      </>
    </BrowserRouter>
  );
}

export default App;
