import Head from 'next/head'

const Seo = ({ pageTitle, pageDescription, pageURL }) => {
  return (
    <Head>
      {/* meta */}
      <meta name='description' content={pageDescription} />
      <meta property='og:title' content={pageTitle} />
      <meta property='og:description' content={pageDescription} />
      <meta property='og:url' content={pageURL} />
      <meta property='og:type' content='website' />

      {/* title */}
      <title>{pageTitle}</title>

      {/* favicons */}
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/favicon/apple-touch-icon.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/favicon/favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/favicon/favicon-16x16.png'
      />
      <link rel='icon' href='/favicon/favicon.ico' />
      <link
        rel='stylesheet'
        href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css'
        referrerPolicy='no-referrer'
      />
    </Head>
  )
}

export default Seo

Seo.defaultProps = {
  pageTitle: 'Chris Achinga',
  pageDescription:
    "Chris's Online resume and portfolio. ChrisDevCode technical articles and projects ",
  pageURL: 'https://chrisdev.vercel.app/',
}
