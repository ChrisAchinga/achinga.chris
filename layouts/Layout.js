// next
import Head from 'next/head'

// components
import Header from '@components/Header'
import Footer from '@components/Footer'
import Menu from '@components/Menu'

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Chris Dev</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Menu />
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
