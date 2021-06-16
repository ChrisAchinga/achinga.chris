import Script from 'next/script'

import Seo from '@/globals/Seo'
import Header from '@/globals/Header'
import Footer from '@/globals/Footer'

// import jscript from '../public/scripts/scripts.js'

const Layout = ({ children, pageTitle, pageDescription, pageURL }) => {
  return (
    <>
      <Seo
        pageDescription={pageDescription}
        pageTitle={pageTitle}
        pageURL={pageURL}
      />
      <Header />
      <main>{children}</main>
      <Footer />
      {/* third party js plugins */}
      <Script
        src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js'
        strategy='afterInteractive'
      />
      <Script
        src='https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js'
        strategy='afterInteractive'
      />
      <Script
        src='https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js'
        strategy='afterInteractive'
      />
      {/* <Script
        async
        src='../public/scripts/scripts.js'
        strategy='afterInteractive'
      /> */}
    </>
  )
}

export default Layout
