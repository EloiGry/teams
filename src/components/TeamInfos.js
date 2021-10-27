import React from "react"

class TeamInfos extends React.Component {
    render() {

      const {crestUrl, shortName, venue, address, email, phone, founded} = this.props.team
      return (
          <>
            <div className="col-4 border"> 
                <img className="w-25"src={crestUrl} alt="logo"/>
                <p> {shortName} </p>
                <p> Stadium :{venue}</p>
                <p> Address :{address}</p>
                <p> Email : {email}</p>
                <p> Phone : {phone}</p>
                <p>Creation : {founded}</p>

            </div>
          </>
      )
    }
  }
  
  export default TeamInfos

