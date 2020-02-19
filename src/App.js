import React from 'react';
import './App.css';
import Header from './components/Header';
import LeftControl from './components/LeftControl';
import RightControl from './components/RightControl';
import Pet from './components/Pet';
import Menu from './components/Menu';
import Feed from './components/Feed';
import Play from './components/Play';
import Game from './components/Game';
import Status from './components/Status';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pet: {
        hunger: 100,
        happiness: 100
      },
      currentView: 1,
      selected: 0
    };
    this.changeView = this.changeView.bind(this);
    this.upDown = this.upDown.bind(this);
  }

  changeView(number) {
    console.log(number);
    this.setState({ selected: 0 })
    this.setState({ currentView: number })
  }



  componentDidMount() {
    this.gameLoopTimer = setInterval(() => {
      const newPet = {
        hunger: (this.state.pet.hunger-1),
        happiness: (this.state.pet.happiness-1)
      };
      this.setState({pet: newPet})
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.gameLoopTimer);
  }

  upDown(mod) {
    this.setState({selected: (this.state.selected + mod)})
  }

  render() {
    const mainGridStyles = {
      display: 'grid',
      gridTemplateColumns: '1fr 3fr 1fr',
      maxWidth: '80%',
      margin: 'auto',
      height: '50vh'
    };

    const screenStyles = {
      backgroundColor: "rgb(202, 231, 241)",
    };

    const chooseView = () => {
      switch(this.state.currentView) {
        case 0:
          return <Pet changeView={this.changeView}/>
        case 1:
          return <Menu changeView={this.changeView}/>
        case 2:
          return <Game changeView={this.changeView}/>
        case 3:
          return <Feed changeView={this.changeView}/>
        case 4:
          return <Play changeView={this.changeView}/>
        default:
          return "ERROR"
      }
    }

    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>

          <div className="main" style={mainGridStyles}>
            <LeftControl upDown={this.upDown}/>
            <div style={screenStyles}>
              {chooseView()}
            </div>
            <RightControl />
          </div>
          <Status pet={this.state.pet}/>
      </div>
    );
  }
}

export default App;
