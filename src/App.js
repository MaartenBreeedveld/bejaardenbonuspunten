import React from 'react';
import { Route, Switch, BrowserRouter as Router, } from 'react-router-dom';
import { Grid } from 'semantic-ui-react'

import Navbar from './components/Navbar'
import { SpeechInput } from './components/SpeechInput';
import { WithdrawPage } from './Scenes/WithdrawPage';
import SignInPage from './Scenes/SignInPage';
import StatsPage from './Scenes/StatsPage';
import { Home } from './Scenes/Home';

import "./App.css";

export const routes = {
  home: '/',
  withdraw: '/opnemen',
  signin: '/aanmelden',
  overview: '/overzicht'
}

function App() {

  return (
    
    <div style={{ height: '100vh' }}>
      <Router>
        <Navbar>
          {/* <div style={{ height: '100%', position: 'absolute', top: '100px', bottom: '50px', left: '0px', right: '0px' }}> */}

          <Grid textAlign='center' verticalAlign='middle' >
            <Grid.Column style={{ maxWidth: '450px', paddingTop: '50px' }}>
              <Switch>
                <Route exact path={routes.home} component={Home} />
                <Route exact path={routes.withdraw} component={WithdrawPage} />
                <Route exact path={routes.signin} component={SignInPage} />
                <Route exact path={routes.overview} component={StatsPage} />
              </Switch>
            </Grid.Column>
          </Grid>
          {/* </div> */}
          {/* <div style={{ width: '100%', position: 'fixed', bottom: '0px', height: '50px', backgroundColor: '#000' }}></div> */}
        </Navbar>
      </Router>
    </div>
  );
}

export default App;
