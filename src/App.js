import React, { Component } from 'react';
import HoldDetail from './HoldDetail'
import './main.css'
import { NavLink } from 'react-router-dom'
import { Route } from 'react-router-dom'
import DateSelector from './DateSelector'
const API_URL="https://dibs-hold-manager-backend.herokuapp.com"
//const API_URL="http://localhost:9090"

class App extends Component {

  constructor() {
    super() 
    this.state = {}
  }

  componentDidMount() {
    fetch(`${API_URL}/holds`, {
        method: 'GET',
        body: JSON.stringify(),
        headers: {
          "Content-Type": "application/json",
        }
    })
    .then(response => response.json())
    .then(data => {
      this.setState({data, selected_month: 'January', monthIndex: 0, selected_day: 1, selected_year: 2020})
      console.log(data)
    }
      )
  }

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

        fetch(`${API_URL}/holds/${id}`, {
          method: 'PATCH',
          body: JSON.stringify(updatedHold),
          headers: {
            "Content-Type": "application/json",
          }
        })
          .then(response => response.json())
          .then(
            console.log(`Hold updated successfully`)
          )
      
        updatedHolds.push(updatedHold)

      } else {updatedHolds.push(hold)}

    })
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
          <NavLink to='/' exact><div id="holds-button" className="nav-button">HOLDS</div></NavLink>
          <NavLink to='/challenged'><div id="challenges-button" className="nav-button">CHALLENGES</div></NavLink>
          <NavLink to='/offered'><div id="offers-button" className="nav-button">OFFERS</div></NavLink>
          <NavLink to='/confirmed'><div id="confirmed-button" className="nav-button">CONFIRMED</div></NavLink>
          <NavLink to='/released'><div id="released-button" className="nav-button">RELEASED</div></NavLink>
          <NavLink to='/new'><div id="new-button" className="nav-button">NEW</div></NavLink>
        </div>

        <div className="view-by-date-container">
          <div className="view-by-date">
            VIEW HOLDS BY DATE:
            <DateSelector 
              appState={this.state} 
              handleState={this.handleState} />
            <NavLink to='/viewbydate'><button className="view-by-date-button" onClick={(e) => this.viewByDate()}>VIEW</button></NavLink>
          </div>
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

        <Route path='/new'>
          {this.state.data.map((hold, idx) => {
            if (hold.hold_status == 'new') {
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

        <Route path='/viewbydate'>
          {this.state.data.map((hold, idx) => {
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
  }}
}

export default App