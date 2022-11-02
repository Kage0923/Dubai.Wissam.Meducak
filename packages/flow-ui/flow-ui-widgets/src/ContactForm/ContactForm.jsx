import React from 'react'
import { Card } from 'theme-ui'
import ContactFormComponent from '@components/ContactForm'
import useForm from '@helpers/useForm'

const ContactForm = () => {
  const { handleSubmit, submitting, success } = useForm()

  return (
    <Card variant='paper'>
      <ContactFormComponent {...{ handleSubmit, submitting, success }} />
    </Card>
  )
}

export default ContactForm
