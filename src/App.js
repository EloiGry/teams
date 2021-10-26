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
      team : 1 
    }
  }

  handlePlusClick = () => {
      this.setState({ team: this.state.team + 1 })
  } 

  handleMoinsClick = () => {
    if (this.state.team > 0) {
      this.setState({ team: this.state.team - 1 })
  }
  }
    

 

  render() {
    return (
      <div className="container">
        <h1>Teams</h1>
        <Counter count={this.state.team} increment={this.handlePlusClick} substract={this.handleMoinsClick}/>
        <div className="row justify-content-around">
          {teams.map(team =>  
           <TeamInfos shortName={team.shortName} image={team.crestUrl} stade={team.venue} address={team.address} email={team.email} tel={team.phone} founded={team.founded}/>
          )}
        </div>
      </div>
    )
  }
}

export default App

// "name": "Burton Albion FC",
//         "shortName": "Burton Albion",
//         "tla": null,
//         "crestUrl": "https://crests.football-data.org/1072.svg",
//         "address": "Princess Way Burton-on-Trent DE13 0AR",
//         "phone": "+44 (0128) 3565938",
//         "website": "http://www.burtonalbionfc.co.uk",
//         "email": "office@burtonalbionfc.co.uk",
//         "founded": 1950,
//         "clubColors": "Yellow / Black",
//         "venue": "Pirelli Stadium",
//         "lastUpdated": "2021-04-13T11:25:43Z"