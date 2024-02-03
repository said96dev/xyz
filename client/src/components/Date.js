import moment from "moment"
import React from 'react'
function Date({date}) {
    let dateformat = moment(date)
    dateformat = dateformat.format("MMM Do, YYYY")
  return (
    <span>{dateformat}</span>
  )
}

export default Date