import React from 'react'
import SelectUser from '../components/SelectUsers'
import { FormRow } from '../components'
const MovingFromForm = ({ values, onFormDataChange }) => {
  const handleChange = (e) => {
    onFormDataChange(e, 'umzugVon', e.target.name)
  }
  const items = ['Buch', 'Laptop', 'Kleidung', 'Fernseher', 'Sonstige']
  return (
    <div className="project-form flex ">
      <h5 className="section-title">Umzug Von</h5>
      <div className="basic-informaion-form">
        <FormRow
          type="text"
          name="street"
          labelText="Straße"
          value={values.street}
          handleChange={handleChange}
        />
        <FormRow
          type="text"
          name="zipCode"
          labelText="PLZ "
          value={values.zipCode}
          handleChange={handleChange}
        />

        <FormRow
          type="text"
          name="city"
          labelText="Stadt"
          value={values.city}
          handleChange={handleChange}
        />
        <FormRow
          type="text"
          name="floor"
          labelText="Stockwek  "
          value={values.floor}
          handleChange={handleChange}
        />
        <FormRow
          type="text"
          name="roomCount"
          labelText="Zimmeranzahl"
          value={values.roomCount}
          handleChange={handleChange}
        />
        <SelectUser
          labelText="was soll transportiert werden?"
          name="itemsToTransport"
          value={values.itemsToTransport}
          handleChange={handleChange}
          list={items}
          multiple={true}
        />
        <FormRow
          type="text"
          name="distanceToTransporter"
          labelText="Wie weit ist der Weg von der Haustür zum Transporter?*"
          value={values.distanceToTransporter}
          handleChange={handleChange}
        />
      </div>
    </div>
  )
}
export default MovingFromForm
