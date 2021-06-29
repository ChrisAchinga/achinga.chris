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
    name: '',
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
        name: '',
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
          'Thank you, I have recieved your messsage and will definately reply ASAP.'
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
      <section className='py-5 mt-5'>
        <div className='container px-5'>
          {/* The Form */}
          <div className='bg-light rounded-3 py-5 px-4 px-md-5 mb-5'>
            <div className='text-center mb-5'>
              <div className='feature bg-primary bg-gradient text-white rounded-3 mb-3'>
                <i className='bi bi-envelope'></i>
              </div>
              <h1 className='fw-bolder'>Get in touch</h1>
              <p className='lead fw-normal text-muted mb-0'>
                I'd love to hear from you
              </p>
            </div>
            <div className='row gx-5 justify-content-center'>
              <div className='col-lg-8 col-xl-6'>
                <form onSubmit={handleOnSubmit}>
                  {/* name input */}
                  <div className='form-floating mb-3'>
                    <input
                      className='form-control'
                      id='name'
                      type='text'
                      placeholder='Enter your name/nickname...'
                      required
                      onChange={handleOnChange}
                      value={inputs.name}
                    />
                    <label for='name'>Name/Nickname</label>
                  </div>
                  {/* email input */}
                  <div className='form-floating mb-3'>
                    <input
                      className='form-control'
                      id='email'
                      type='email'
                      placeholder='name@example.com'
                      required
                      onChange={handleOnChange}
                      value={inputs.email}
                    />
                    <label for='email'>Email address</label>
                  </div>

                  {/* message input */}
                  <div class='form-floating mb-3'>
                    <textarea
                      class='form-control'
                      id='message'
                      name='message'
                      type='text'
                      placeholder='Enter your message here...'
                      style={{ height: '10rem' }}
                      onChange={handleOnChange}
                      required
                      value={inputs.message}
                    ></textarea>
                    <label for='message'>Message</label>
                    <div
                      class='invalid-feedback'
                      data-sb-feedback='message:required'
                    >
                      A message is required.
                    </div>
                  </div>
                  <div className='d-grid'>
                    <button
                      type='submit'
                      className='btn btn-primary btn-lg'
                      disabled={status.submitting}
                    >
                      {!status.submitting
                        ? !status.submitted
                          ? 'Submit'
                          : 'Submitted'
                        : 'Sending...'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* other contact options */}
          <div className='row gx-5 row-cols-2 row-cols-lg-4 py-5'>
            <div className='col'>
              <div className='feature bg-primary bg-gradient text-white rounded-3 mb-3'>
              <i className="fab fa-facebook-messenger"></i>
              </div>
              <div className='h5 mb-2'>Chat on Messenger</div>
              <p className='text-muted mb-0'>
                Chat live with one of our support specialists.
              </p>
            </div>
            <div className='col'>
              <div className='feature bg-primary bg-gradient text-white rounded-3 mb-3'>
                <i className='bi bi-people'></i>
              </div>
              <div className='h5'>Ask the community</div>
              <p className='text-muted mb-0'>
                Explore our community forums and communicate with other users.
              </p>
            </div>
            <div className='col'>
              <div className='feature bg-primary bg-gradient text-white rounded-3 mb-3'>
                <i className='bi bi-question-circle'></i>
              </div>
              <div className='h5'>Support center</div>
              <p className='text-muted mb-0'>
                Browse FAQ's and support articles to find solutions.
              </p>
            </div>
            <div className='col'>
              <div className='feature bg-primary bg-gradient text-white rounded-3 mb-3'>
                <i className='bi bi-telephone'></i>
              </div>
              <div className='h5'>Call us</div>
              <p className='text-muted mb-0'>
                Call us during normal business hours at (555) 892-9403.
              </p>
            </div>
          </div>
        </div>
      </section>
      {status.info.error && (
        <div className='error'>Error: {status.info.msg}</div>
      )}
      {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
    </Layout>
  )
}

export default Message
