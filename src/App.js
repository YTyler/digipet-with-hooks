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
    this.select = this.select.bind(this);
  }

  changeView(number) {
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

  validateEdge(num, top) {
    return (num < 0) ? 0 : (num > top) ? top : num;
  }

  upDown(mod) {
    let newNum = this.state.selected + mod;
    if (this.state.currentView === 1 || this.state.currentView === 3) {
      newNum = this.validateEdge(newNum, 2)
    }
    this.setState({selected: (newNum)})
  }

  select() {
    if (this.state.currentView === 0) {
      this.changeView(1);
    } else if (this.state.currentView === 1) {
      if (this.state.selected === 0) {
        this.changeView(2)
      } else if (this.state.selected === 1) {
        this.changeView(3)
      } else if (this.state.selected === 2) {
        this.changeView(4)
      }
    } else if (this.state.currentView === 3) {
      //Some Feed Function
      console.log(this.state.selected+1);
    }
    return 0
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
            <RightControl select={this.select} changeView={this.changeView} />
          </div>
          <Status pet={this.state.pet}/>
      </div>
    );
  }
}

export default App;
