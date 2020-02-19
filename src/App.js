import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route } from 'react-router-dom';
  import './App.css';
  import Header from './components/Header';
  import LeftControl from './components/LeftControl';
  import RightControl from './components/RightControl';
  import Pet from './components/Pet';
  import Menu from './components/Menu';
  import Feed from './components/Feed';
  import Play from './components/Play';
  import Game from './components/Game';


  class App extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        pet: {
          hunger: 100,
          happiness: 100
        },
        currentView: 0,
        selected: 0
      };
    }

    render() {
      const mainGridStyle = {
        display: 'grid',
        gridTemplateColumns: '1fr 3fr 1fr',
        maxWidth: '80%',
        margin: 'auto',
        height: '50vh'
      };

      return (
        <div className="App">
          <header className="App-header">
            <Header />
          </header>
          <Router>
            <div className="main" style={mainGridStyle}>
              <LeftControl />
              <Switch>
                <Route exact path='/'>
                  {this.state.currentView = 0}
                  <Pet />
                </Route>
                <Route path='/menu'>
                  <Menu />
                </Route>
                <Route path='/game'>
                  <Game />
                </Route>
                <Route path='/feed'>
                  <Feed />
                </Route>
                <Route path='/play'>
                  <Play />
                </Route>
              </Switch>
              <RightControl />
            </div>
          </Router>
        </div>
      );
    }
  }

  export default App;
