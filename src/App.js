import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Navigation from './components/Navigation/Navigation'
import Home from './components/SectionHome/Home'
import Find from './components/SectionFind/Find'
import Add from './components/SectionAdd/Add'
import Update from './components/SectionUpdate/Update'
import Delete from './components/SectionDelete/Delete'

function App() {
  return (
    <BrowserRouter>
      <>
        <Navigation />
        <Route exact path="/" component={Home} />
        <Route path="/find" component={Find} />
        <Route path="/add" component={Add} />
        <Route path="/update" component={Update} />
        <Route path="/delete" component={Delete} />

      </>
    </BrowserRouter>
  );
}

export default App;
