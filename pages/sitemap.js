import useSwr from 'swr'
import Link from 'next/link'
import Layout from '@/layout/Layout'

const fetcher = (url) => fetch(url).then((res) => res.json())

const Sitemap = () => {
  const { data, error } = useSwr('/api/sitemap', fetcher)

  if (error) return <div>Failed to load users</div>
  if (!data) return <div>Loading...</div>

  return (
    <Layout
      pageTitle='Chris Achinga Projects'
      pageDescription='All ChrisDevCode Projects'
      pageURL='https://chrisdev.vercel.app/projects'
    >
      <h1>Sitemaps</h1>
      {data.pages.map((data) => (
        <div key={data.id}>
          <Link href={data.link}>
            <a>{data.name}</a>
          </Link>
          <br />
        </div>
      ))}
    </Layout>
  )
}

export default Sitemap
