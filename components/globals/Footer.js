// import Link from 'next/link'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <div className='bg-dark text-white p-3'>
      <footer className=' footer text-center'>
        <div className='container'>
          <div className='row'>
            {/* <!-- Footer Location--> */}
            <div className='col-lg-4 mb-5 mb-lg-0'>
              <h4 className='text-uppercase mb-4'>Location</h4>
              <p className='lead mb-0'>
                2215 John Daniel Drive
                <br />
                Clark, MO 65243
              </p>
            </div>
            {/* <!-- Footer Social Icons--> */}
            <div className='col-lg-4 mb-5 mb-lg-0'>
              <h4 className='text-uppercase mb-4'>Around the Web</h4>
              <a className='btn btn-outline-light btn-social mx-1' href='#!'>
                <i className='fab fa-fw fa-facebook-f'></i>
              </a>
              <a className='btn btn-outline-light btn-social mx-1' href='#!'>
                <i className='fab fa-fw fa-twitter'></i>
              </a>
              <a className='btn btn-outline-light btn-social mx-1' href='#!'>
                <i className='fab fa-fw fa-linkedin-in'></i>
              </a>
              <a className='btn btn-outline-light btn-social mx-1' href='#!'>
                <i className='fab fa-fw fa-dribbble'></i>
              </a>
            </div>
            {/* <!-- Footer About Text--> */}
            <div className='col-lg-4'>
              <h4 className='text-uppercase mb-4'>About Freelancer</h4>
              <p className='lead mb-0'>
                Freelance is a free to use, MIT licensed Bootstrap theme created
                by
                <a href='http://startbootstrap.com'>Start Bootstrap</a>.
              </p>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- Copyright Section--> */}
      <div className='copyright py-4 text-center text-white'>
        <div className='container'>
          <small>Copyright &copy; Chris N. Achinga {year}</small>
        </div>
      </div>
    </div>
  )
}

export default Footer
