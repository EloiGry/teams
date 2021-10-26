import React from "react"

class TeamInfos extends React.Component {
    render() {
      return (
          <>
            <div className="col-4 border"> 
                <img className="w-25"src={this.props.image} alt="logo"/>
                <p> {this.props.shortName} </p>
                <p> Stadium :{this.props.stade}</p>
                <p> Address :{this.props.address}</p>
                <p> Email : {this.props.email}</p>
                <p> Phone : {this.props.tel}</p>
                <p>Creation : {this.props.founded}</p>

            </div>
          </>
      )
    }
  }
  
  export default TeamInfos

//   "name": "Burton Albion FC",
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