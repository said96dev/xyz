import React, { useState, useContext, useEffect } from 'react'
import Wrapper from '../assets/wrappers/ProjectPage'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Stepper, Step, StepLabel } from '@material-ui/core'
import { AppContext } from '../context/appContext'
import {
  Alert,
  MovingToForm,
  MovingFromForm,
  PersonDaten,
  Appointment,
} from '../components'

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: '#328853',
    marginRight: theme.spacing(2),
    transition: '0.3s ease-in-out all',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#328853',
      boxShadow: ' 0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    },
  },
}))
function getSteps() {
  return ['Umzug von', 'Umzug nach', 'Personliche Daten', 'Termin Vereinbaren']
}
function getStepContent(step, values, setValues, handleChange) {
  switch (step) {
    case 0:
      return (
        <MovingFromForm
          values={values.umzugVon}
          setValues={setValues}
          onFormDataChange={handleChange}
        />
      )
    case 1:
      return (
        <MovingToForm
          values={values.umzugNach}
          setValues={setValues}
          onFormDataChange={handleChange}
        />
      )
    case 2:
      return (
        <PersonDaten
          values={values.persoenlicheDaten}
          setValues={setValues}
          onFormDataChange={handleChange}
        />
      )
    case 3:
      return (
        <Appointment
          values={values.terminVereinbaren}
          setValues={setValues}
          onFormDataChange={handleChange}
        />
      )
    default:
      return 'unknown step'
  }
}

function MovingForm() {
  const initialState = {
    umzugVon: {
      street: '',
      zipCode: '',
      city: '',
      floor: '',
      roomCount: '',
      distanceToTransporter: '',
      itemsToTransport: [],
    },
    umzugNach: {
      street: '',
      zipCode: '',
      city: '',
      floor: '',
      roomCount: '',
      distanceToTransporter: '',
    },
    persoenlicheDaten: {
      street: '',
      zipCode: '',
      city: '',
      email: '',
      name: '',
      tel: '',
    },
    terminVereinbaren: {
      date: new Date(),
      time: new Date().getTime(),
    },
  }
  const {
    alertText,
    showAlert,
    getAppointment,
    addAppointment,
    appointments,
    totalAppointments,
  } = useContext(AppContext)
  const classes = useStyles()
  const [activeStep, setActiveStep] = useState(0)
  const [skippedSteps, setSkippedSteps] = useState([])
  const [values, setValues] = useState(initialState)
  useEffect(() => {
    getAppointment()
    console.log(appointments)
    if (alertText === 'Neuer Termin geschaffen!') {
      clearValues()
    }
    // eslint-disable-next-line
  }, [alertText])
  const steps = getSteps()
  const isStepOptional = (step) => {
    return
  }

  const isStepSkipped = (step) => {
    return skippedSteps.includes(step)
  }

  const handleNext = (data) => {
    data.preventDefault()
    if (activeStep === steps.length - 1) {
      console.log(values)
      addAppointment(values)
      setActiveStep(activeStep - 3)
    } else {
      setActiveStep(activeStep + 1)
      setSkippedSteps(
        skippedSteps.filter((skipItem) => skipItem !== activeStep)
      )
    }
  }

  const handleBack = () => {
    setActiveStep(activeStep - 1)
  }

  const handleSkip = () => {
    if (!isStepSkipped(activeStep)) {
      setSkippedSteps([...skippedSteps, activeStep])
    }
    setActiveStep(activeStep + 1)
  }

  const clearValues = () => {
    setValues(initialState)
  }
  const handleChange = (event, category, field) => {
    if (event && event.target) {
      const newValue =
        event.target.type === 'checkbox'
          ? event.target.checked
          : event.target.value

      setValues((prevValues) => {
        return {
          ...prevValues,
          [category]: {
            ...prevValues[category],
            [field]: newValue,
          },
        }
      })
    }
    if (field === 'date') {
      setValues((prevValues) => {
        return {
          ...prevValues,
          [category]: {
            ...prevValues[category],
            [field]: event,
          },
        }
      })
    }
  }

  return (
    <Wrapper>
      <div className="form">
        {showAlert && <Alert />}
        <div className="pt-3">
          <Stepper
            alternativeLabel
            activeStep={activeStep}
            className="stepper nodisplay pt-3 bg-black"
          >
            {steps.map((step, index) => {
              const labelProps = {}
              const stepProps = {}

              if (isStepSkipped(index)) {
                stepProps.completed = false
              }
              return (
                <Step {...stepProps} key={index}>
                  <StepLabel {...labelProps}>{step}</StepLabel>
                </Step>
              )
            })}
          </Stepper>

          <div>
            <form onSubmit={handleNext}>
              <div>
                {getStepContent(activeStep, values, setValues, handleChange)}
              </div>

              <div className="stepper-btn-container">
                <Button disabled={activeStep === 0} onClick={handleBack}>
                  Zurück
                </Button>
                <div>
                  {isStepOptional(activeStep) && (
                    <Button
                      className={classes.button}
                      variant="contained"
                      onClick={handleSkip}
                    >
                      skip
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    type="submit"
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Beenden' : 'Weiter'}
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default MovingForm
