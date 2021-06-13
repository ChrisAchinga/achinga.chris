import { useState } from 'react'
import axios from 'axios'
import Layout from '@/layout/Layout'

const Message = () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  })

  const [inputs, setInputs] = useState({
    email: '',
    message: '',
  })

  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      })
      setInputs({
        email: '',
        message: '',
      })
    } else {
      setStatus({
        info: { error: true, msg: msg },
      })
    }
  }

  const handleOnChange = (e) => {
    e.persist()
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }))
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    })
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }))
    axios({
      method: 'POST',
      url: 'https://formspree.io/f/mdoyzevv',
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,
          'Thank you, I have recieved your messsage and will definately reply asap.'
        )
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error)
      })
  }

  return (
    <Layout
      pageTitle='Send Chris A Message'
      pageDescription='All ChrisDevCode Projects'
      pageURL='https://chrisdev.vercel.app/message'
    >
      <h1>Send Message</h1>
      <form onSubmit={handleOnSubmit}>
        <label htmlFor='email'>Email</label>
        <input
          id='email'
          type='email'
          name='_replyto'
          onChange={handleOnChange}
          required
          value={inputs.email}
        />
        <label htmlFor='message'>Message</label>
        <textarea
          id='message'
          name='message'
          onChange={handleOnChange}
          required
          value={inputs.message}
        />
        <button type='submit' disabled={status.submitting}>
          {!status.submitting
            ? !status.submitted
              ? 'Submit'
              : 'Submitted'
            : 'Submitting...'}
        </button>
      </form>
      {status.info.error && (
        <div className='error'>Error: {status.info.msg}</div>
      )}
      {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
    </Layout>
  )
}

export default Message
