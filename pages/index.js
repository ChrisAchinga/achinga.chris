import useSwr from 'swr'
import Layout from '@/layout/Layout'
// import { API_URL } from '@/config/index'

const fetcher = (url) => fetch(url).then((res) => res.json())

const Home = () => {

  const { data, error } = useSwr('/api', fetcher)

  if (error) return <div>Failed to load data</div>
  if (!data) return <div>Loading...</div>

  return (
    <Layout>
      <h1>{data.fullName}</h1>
      <hr />
      {/* contact info */}
      {data.contacts.map((data) => (
        <div key={data.id}>
          <h4>{data.name}</h4> <p>{data.address}</p>
        </div>
      ))}
      {/* social links */}
      {data.social.map((data) => (
        <div key={data.id}>
          <a href={data.link}>{data.name}</a> <br />
        </div>
      ))}
    </Layout>
  )
}

export default Home

// export async function getStaticProps() {
//   const res = await fetch(`${API_URL}/api`)
//   const data = await res.json()

//   // console.log(data)

//   return {
//     props: { data },
//     revalidate: 1,
//   }
// }
