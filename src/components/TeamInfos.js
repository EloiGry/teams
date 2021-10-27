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

