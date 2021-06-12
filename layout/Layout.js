import Seo from '@/globals/Seo'

const Layout = ({ children, pageTitle, pageDescription, pageURL }) => {
  return (
    <div>
      <Seo
        pageDescription={pageDescription}
        pageTitle={pageTitle}
        pageURL={pageURL}
      />
      <main>{children}</main>
    </div>
  )
}

export default Layout
