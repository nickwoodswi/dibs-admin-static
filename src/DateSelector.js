import React, { Component } from 'react'
import MonthDayCounts from './MonthDayCounts'

class DateSelector extends Component {
  render() {
    const months = Object.keys(MonthDayCounts)
    const days = MonthDayCounts[this.props.appState.selected_month]
    return(
      <>
      <select className="month-selector" onChange={e => this.props.handleState('selected_month', e.target.value)}>
        {months.map((month, idx) => {
          return(
            <option key={idx}>{month}</option>
          )
        })}
      </select>
      <select className="day-selector" onChange={e => this.props.handleState('selected_day', e.target.value)}>
        <>{days}</>
      </select>
      <select className="year-selector" onChange={e => this.props.handleState('selected_year', e.target.value)}>
        <option>2020</option>
        <option>2021</option>
      </select>
      </>
    )
  }
}

export default DateSelector