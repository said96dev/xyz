import React from 'react'

import { FormRow } from '../components'
const PersonDaten = ({ values, onFormDataChange }) => {
  const handleChange = (e) => {
    onFormDataChange(e, 'persoenlicheDaten', e.target.name)
  }
  return (
    <div className="project-form ">
      <h5 className="section-title">Persoenliche Daten</h5>

      <div className="basic-informaion-form">
        <FormRow
          type="text"
          name="name"
          labelText="Name"
          value={values.name}
          handleChange={handleChange}
        />
        <FormRow
          type="text"
          name="street"
          labelText="Straße  "
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
          type="email"
          name="email"
          labelText="Email"
          value={values.email}
          handleChange={handleChange}
        />

        <FormRow
          type="text"
          name="tel"
          labelText="Tel"
          value={values.tel}
          handleChange={handleChange}
        />
      </div>
    </div>
  )
}
export default PersonDaten
