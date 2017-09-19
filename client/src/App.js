import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import Menu from './components/Menu';
import 'semantic-ui-css/semantic.min.css';
import {Container} from 'semantic-ui-react'


const App = () => (
  <Container>
    <Route exact path="/" component={Home} />
    <Route exact path="/menu" component={Menu} />
  </Container>

);

export default App;