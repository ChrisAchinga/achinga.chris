// import { useState } from 'react'
import { Button } from 'react-bootstrap'

const About = () => {
  return (
    <>
      <section className='page-section bg-primary text-white mb-0' id='about'>
        <div className='container'>
          <div className='text-center'>
            <h2 className='page-section-heading d-inline-block text-white'>
              ABOUT (me)
            </h2>
          </div>
          <div className='divider-custom divider-light'>
            <div className='divider-custom-line'></div>
            <div className='divider-custom-icon'>
              <i className='fas fa-fighter-jet'></i>
            </div>
            <div className='divider-custom-line'></div>
          </div>

          <div className='row'>
            <div className='col-lg-4 ml-auto'>
              <p className='pre-wrap lead'>
                I have an ambitious personality and thrives on challenges. While
                setting new goals for myself, I aim for results that will make
                me more productive and effective in my environment.
              </p>
            </div>
            <div className='col-lg-4 mr-auto'>
              <p className='pre-wrap lead'>
                I am not comfortable with settling for something I’m not
                comfortable with, thus looking for opportunities wh ere I can
                get to perform better. I enjoy interacting with people and
                sharing my skill and also learning from them.
              </p>
            </div>
          </div>

          <div className='text-center'>
            <Button
              variant='secondary'
              size='lg'
              className='text-capitalize'
              block
            >
              <a href='https://www.dropbox.com/s/mz0asx4fu3wce87/chris_achinga%28beta2%29%20.docx?dl=0' target="_blank" rel="noreferrer">
                view full resume (document)
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
