import { useState, useEffect, useCallback } from 'react'

const useForm = () => {
  const [submitting, setSubmitting] = useState(false)
  const [target, setTarget] = useState({})
  const [success, setSuccess] = useState()
  const [values, setValues] = useState()
  const [action, setAction] = useState()

  const handleSubmit = (e, { values, action } = {}) => {
    e.preventDefault()
    if (values) setValues(values)
    if (action) setAction(action)
    setTarget(e.target)
    setSubmitting(true)
  }

  const sendValues = useCallback(() => {
    const form = new FormData(target)
    const formData = new URLSearchParams(values || form).toString()
    const isDemo = target.getAttribute('demo')

    // Mimicking form submission for demos
    if (isDemo) {
      setTimeout(() => {
        setSuccess(true)
        setSubmitting(false)
      }, 1500)
      return
    }

    // Real form submission
    fetch(action || target.action, {
      method: target.method || 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json'
      },
      body: formData
    })
      .then(() => {
        target.reset()
        setSuccess(true)
      })
      .catch(error => {
        setSuccess(false)
      })
      .finally(() => {
        setSubmitting(false)
      })
  }, [target])

  useEffect(() => {
    if (submitting) {
      sendValues()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [submitting, sendValues])

  const reset = useCallback(() => {
    setSubmitting(false)
    setSuccess(undefined)
    setValues(undefined)
    setAction(undefined)
  }, [])

  return {
    handleSubmit,
    submitting,
    success,
    reset
  }
}

export default useForm
