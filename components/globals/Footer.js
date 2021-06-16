import Link from 'next/link'

const Footer = ({ facebook, twitter, linkedin, pinterest }) => {
  const year = new Date().getFullYear()
  return (
    <div>
      <footer className=' footer text-center'>
        <div className='container'>
          <div className='row'>
            {/* <!-- Footer Location--> */}
            <div className='col-lg-4 mb-5 mb-lg-0'>
              <h4 className='text-uppercase mb-4'>Location</h4>
              <p className='lead mb-0'>
                Mombasa
                <br />
                Kenya, 254
              </p>
            </div>
            {/* <!-- Footer Social Icons--> */}
            <div className='col-lg-4 mb-5 mb-lg-0'>
              <h4 className='text-uppercase mb-4'>Runaways</h4>
              <Link href={facebook}>
                <a className='btn btn-outline-light btn-social mx-1'>
                  <i className='fab fa-fw fa-facebook-f'></i>
                </a>
              </Link>
              <Link href={twitter}>
                <a className='btn btn-outline-light btn-social mx-1'>
                  <i className='fab fa-fw fa-twitter'></i>
                </a>
              </Link>
              <Link href={linkedin}>
                <a className='btn btn-outline-light btn-social mx-1'>
                  <i className='fab fa-fw fa-linkedin-in'></i>
                </a>
              </Link>
              <Link href={pinterest}>
                <a className='btn btn-outline-light btn-social mx-1'>
                  <i className='fab fa-pinterest'></i>
                </a>
              </Link>
            </div>
            {/* <!-- Footer About Text--> */}
            <div className='col-lg-4'>
              <h4 className='text-uppercase mb-4'>ChrisDevCode</h4>
              <p className='lead mb-0'>
                I love writing clean code and I hope I'd be a Pilot one day.{' '}
                <br />I will Fly
              </p>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- Copyright Section--> */}
      <div className='copyright py-4 text-center text-white'>
        <div className='container'>
          <small>Copyright &copy; Chris N. Achinga {year}</small>
          <br />
          <Link href='/sitemap'>
            <a>Sitemap</a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer

Footer.defaultProps = {
  facebook: 'https://www.facebook.com/chrisdevcode',
  twitter: 'https://twitter.com/achinga_chris',
  linkedin: 'https://www.linkedin.com/in/chrisachinga/',
  pinterest: 'https://www.pinterest.com/chrisdevcode/',
}
