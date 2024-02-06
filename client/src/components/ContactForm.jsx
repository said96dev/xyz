import React, { useRef } from 'react'
import { TextField, Button, Grid } from '@mui/material'
import Wrapper from '../assets/wrappers/ProfilePage'
import { PageHeader } from '../components'
import emailjs from '@emailjs/browser'
const ContactForm = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_4eigxci', 'template_qdagvu7', form.current, {
        publicKey: 'J7HagSK0paS42M_Xt',
      })
      .then(
        () => {
          console.log('SUCCESS!')
        },
        (error) => {
          console.log('FAILED...', error.text)
        }
      )
  }

  return (
    <Wrapper>
      <PageHeader
        name={
          'Haben wir Ihr Interesse geweckt oder brauchen Sie Hilfe beim Umzug?'
        }
        description={'Dann sind Sie bei uns genau richtig!'}
      />

      <form onSubmit={sendEmail} className="form container contact" ref={form}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              required
              name="user_name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="E-Mail"
              variant="outlined"
              type="email"
              required
              name="user_email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Nachricht"
              variant="outlined"
              multiline
              rows={4}
              required
              name="message"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className="btn btn-hero-l"
            >
              Senden
            </Button>
          </Grid>
        </Grid>
      </form>
    </Wrapper>
  )
}

export default ContactForm
