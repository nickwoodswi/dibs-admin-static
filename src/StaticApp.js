import React, { Component } from 'react';
import HoldDetail from './HoldDetail'
import './main.css'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import DateSelector from './DateSelector'

class StaticApp extends Component {

  constructor() {
    super() 
    this.state = {data: [
        {
            id: "1",
            date_of_req: "Tue Apr 14 2020 11:03:55 GMT-0500 (Central Daylight Time)",
            hold_type: "multiple",
            hold_date:  "Tue Jan 14 2020 00:00:00 GMT-0600 (Central Standard Time)",
            holds: [],
            holds_added: [],
            contact_type: "agent",
            event_type: "band",
            support_need: "no",
            dsupport_type: "band",
            support_type3: "solo",
            support_type4: "dj",
            hold_firstname: "Nicholas",
            hold_lastname: "Woods",
            hold_email: "richkiddigital@gmail.com",
            contact_act: "Direct Hit",
            spotify: "6969696",
            youtube: "YouTube",
            facebook: "Facebook",
            bandcamp: "Bandcamp",
            website: "Website",
            dsupport_title: "Test Band 2",
            spotify2: "46372920",
            youtube2: "2Tube",
            facebook2: "2Book",
            bandcamp2: "2Camp",
            website2: "2Site",
            opener_title: "Opener2",
            spotify3: "564739201-",
            youtube3: "3Tube",
            facebook3: "3Book",
            bandcamp3: "3Camp",
            website3: "3Site",
            opener2_title: "Another Artist",
            spotify4: "564739201",
            youtube4: "4Tube",
            facebook4: "4Book",
            bandcamp4: "4Camp",
            website4: "4Site",
            contact_org: "The AGency",
            contact_phone: "2623531696",
            org_street1: "7944 N Green Bay Rd",
            org_street2: "Apt 7",
            org_city: "River Hills",
            org_country: "United States",
            org_zip: "53217",
            event_detail: "This is a test of my state",
            hold_status: "held",
            hold_number: "2"
        },
        {
            id: "2",
            date_of_req: "Tue Apr 14 2020 11:03:55 GMT-0500 (Central Daylight Time)",
            hold_type: "multiple",
            hold_date: "Fri Feb 14 2020 00:00:00 GMT-0600 (Central Standard Time)",
            holds: [],
            holds_added: [],
            contact_type: "agent",
            event_type: "band",
            support_need: "no",
            dsupport_type: "band",
            support_type3: "solo",
            support_type4: "dj",
            hold_firstname: "Nicholas",
            hold_lastname: "Woods",
            hold_email: "richkiddigital@gmail.com",
            contact_act: "Direct Hit",
            spotify: "6969696",
            youtube: "YouTube",
            facebook: "Facebook",
            bandcamp: "Bandcamp",
            website: "Website",
            dsupport_title: "Test Band 2",
            spotify2: "46372920",
            youtube2: "2Tube",
            facebook2: "2Book",
            bandcamp2: "2Camp",
            website2: "2Site",
            opener_title: "Opener2",
            spotify3: "564739201-",
            youtube3: "3Tube",
            facebook3: "3Book",
            bandcamp3: "3Camp",
            website3: "3Site",
            opener2_title: "Another Artist",
            spotify4: "564739201",
            youtube4: "4Tube",
            facebook4: "4Book",
            bandcamp4: "4Camp",
            website4: "4Site",
            contact_org: "The AGency",
            contact_phone: "2623531696",
            org_street1: "7944 N Green Bay Rd",
            org_street2: "Apt 7",
            org_city: "River Hills",
            org_country: "United States",
            org_zip: "53217",
            event_detail: "This is a test of my state",
            hold_status: "held",
            hold_number: "1"
        }], 
        selected_month: 'January', 
        monthIndex: 0, 
        selected_day: 1, 
        selected_year: 2020
    }
  }

//   componentDidMount() {
//     fetch('http://localhost:9090/holds', {
//         method: 'GET',
//         body: JSON.stringify(),
//         headers: {
//           "Content-Type": "application/json",
//         }
//     })
//     .then(response => response.json())
//     .then(data => {
//       this.setState({data, selected_month: 'January', monthIndex: 0, selected_day: 1, selected_year: 2020})
//       console.log(data)
//     }
//       )
//   }

  handleState = (propName, value) => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"]
    this.setState({
      [propName]: value
    })
    if (propName == 'selected_month') {
      this.setState({
        monthIndex: monthNames.indexOf(value)
      })
    }
  }

  changeStatus = (status, id) => {
    let updatedHolds = []
    this.state.data.map(hold => {

      if (hold.id == id) {

        let updatedHold = {
          id: hold.id,
          date_of_req: hold.date_of_req, 
          hold_date: hold.hold_date,
          hold_status: status,
          contact_type: hold.contact_type, 
          event_type: hold.event_type, 
          support_need: hold.support_need, 
          dsupport_type: hold.dsupport_type, 
          support_type3: hold.support_type3, 
          support_type4: hold.support_type4, 
          hold_firstname: hold.hold_firstname, 
          hold_lastname: hold.hold_lastname, 
          hold_email: hold.hold_email,
          contact_act: hold.contact_act,
          spotify: hold.spotify,
          youtube: hold.youtube,
          facebook: hold.facebook,
          bandcamp: hold.bandcamp,
          website: hold.website,
          dsupport_title: hold.dsupport_title,
          spotify2: hold.spotify2,
          youtube2: hold.youtube2,
          facebook2: hold.facebook2,
          bandcamp2: hold.bandcamp2,
          website2: hold.website2,
          opener_title: hold.opener_title,
          spotify3: hold.spotify3,
          youtube3: hold.youtube3,
          facebook3: hold.facebook3,
          bandcamp3: hold.bandcamp3,
          website3: hold.website3,
          opener2_title: hold.opener2_title,
          spotify4: hold.spotify4,
          youtube4: hold.youtube4,
          facebook4: hold.facebook4,
          bandcamp4: hold.bandcamp4,
          website4: hold.website4,
          contact_org: hold.contact_org,
          contact_phone: hold.contact_phone,
          org_street1: hold.org_street1,
          org_street2: hold.org_street2,
          org_city: hold.org_city,
          org_country: hold.org_country,
          org_zip: hold.org_zip,
          event_detail: hold.event_detail,
          hold_status: status,
          hold_number: hold.hold_number
        }

        // fetch(`http://localhost:9090/holds/${id}`, {
        //   method: 'PATCH',
        //   body: JSON.stringify(updatedHold),
        //   headers: {
        //     "Content-Type": "application/json",
        //   }
        // })
        //   .then(response => response.json())
        //   .then(
        //     console.log(`Hold updated successfully`)
        //   )
      
        updatedHolds.push(updatedHold)

      } else {updatedHolds.push(hold)}

    })
    console.log(updatedHolds)
    this.setState({data: updatedHolds})
  }

  viewByDate = () => {

    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"]

    let selectedMonthIndex = monthNames.indexOf(this.state.selected_month)

    this.setState({monthIndex: selectedMonthIndex})

    console.log(new Date(this.state.selected_year, this.state.monthIndex, this.state.selected_day))

  }  
  
  render() {
    if (!this.state.data) {
      return(<h1>Loading holds!</h1>)
    } else {
    return (
      <>
      <header>
        <h1>DIBS</h1>
      </header>

      <nav>

        <div className="filter-buttons">
          <Link to='/'><div id="holds-button" className="nav-button">HOLDS</div></Link>
          <Link to='/challenged'><div id="challenges-button" className="nav-button">CHALLENGES</div></Link>
          <Link to='/offered'><div id="offers-button" className="nav-button">OFFERS</div></Link>
          <Link to='/confirmed'><div id="confirmed-button" className="nav-button">CONFIRMED</div></Link>
          <Link to='/released'><div id="released-button" className="nav-button">RELEASED</div></Link>
          <div id="empty-button" className="nav-button">EMPTY</div>
        </div>
    
        <div className="view-by-date">
          <div className="view-by-date-header">VIEW HOLDS BY DATE:</div>
          <DateSelector 
            appState={this.state} 
            handleState={this.handleState} />
          <Link to='/viewbydate'><button className="view-by-date-button" onClick={(e) => this.viewByDate()}>VIEW</button></Link>
        </div>
      </nav>

      <main className='App'>

        <Route path='/challenged'>
          {this.state.data.map((hold, idx) => {
            if (hold.hold_status == 'challenged') {
              return(
                <HoldDetail
                  key={idx}
                  id={hold.id}
                  holdState={hold}
                  changeStatus={this.changeStatus} />
              )
            }
          })}
        </Route>

        <Route path='/offered'>
          {this.state.data.map((hold, idx) => {
            if (hold.hold_status == 'offered') {
              return(
                <HoldDetail
                  key={idx}
                  id={hold.id}
                  holdState={hold}
                  changeStatus={this.changeStatus} />
              )
            }
          })}
        </Route>

        <Route path='/confirmed'>
          {this.state.data.map((hold, idx) => {
            if (hold.hold_status == 'confirmed') {
              return(
                <HoldDetail
                  key={idx}
                  id={hold.id}
                  holdState={hold}
                  changeStatus={this.changeStatus} />
              )
            }
          })}
        </Route>

        <Route path='/released'>
          {this.state.data.map((hold, idx) => {
            if (hold.hold_status == 'released') {
              return(
                <HoldDetail
                  key={idx}
                  id={hold.id}
                  holdState={hold}
                  changeStatus={this.changeStatus} />
              )
            }
          })}
        </Route>

        <Route path='/' exact>
        {this.state.data.map((hold, idx) => {
          return(
            <HoldDetail 
              key={idx}
              id={hold.id}
              holdState={hold}
              changeStatus={this.changeStatus} />
          )
        })}

        </Route>

        <Route path='/viewbydate'>
          {this.state.data.map((hold, idx) => {
            console.log(hold.hold_date)
            if (hold.hold_date == new Date(this.state.selected_year, this.state.monthIndex, this.state.selected_day)) {
              return(
                <HoldDetail
                  key={idx}
                  id={hold.id}
                  holdState={hold}
                  changeStatus={this.changeStatus} />
              )
            }
          })}
        </Route>

      </main>
      </>
    )
  }
}}

export default StaticApp