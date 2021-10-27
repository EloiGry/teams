import logo from './logo.svg';
import React from 'react';
import './App.css';
import teams from './teams.json'
import TeamInfos from './components/TeamInfos'
import Counter from './components/Counter'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      count: 0
    }
  }

  handlePlusClick = () => {
      this.setState({ count: this.state.count + 1 })
  } 

  handleMoinsClick = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 })
  }
  }
    

 

  render() {
    return (
      <div className="container">
        <h1>Teams</h1>
        <Counter count={this.state.count} increment={this.handlePlusClick} substract={this.handleMoinsClick}/>
        <div className="row justify-content-around">
          {teams.slice(0, this.state.count).map(team =>  
           <TeamInfos team={team} />
          )}
        </div>
      </div>
    )
  }
}

export default App

