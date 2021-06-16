import Script from 'next/script'

import Seo from '@/globals/Seo'
import Header from '@/globals/Header'
import Footer from '@/globals/Footer'

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
    </>
  )
}

export default Layout
