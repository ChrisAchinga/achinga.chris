import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
import Layout from '@/layout/Layout'

const Blog = ({ posts }) => {
  console.log('posts', posts)
  return (
    <Layout
      pageTitle='Chris Achinga Technical Articles'
      pageDescription='All ChrisDevCode technical articles and tutorials on Full Stack Development and Developr Tools'
      pageURL='https://chrisdev.vercel.app/blog'
    >
      <h1>My Technical Blogs</h1>
      {posts.map((post) => {
        return (
          <div key={post._id}>
            <h1>{post.title}</h1>
            <a href={`https://chrisdevcode.hashnode.dev/${post.slug}`}>Read</a>
          </div>
        )
      })}
    </Layout>
  )
}

export default Blog

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: 'https://api.hashnode.com/',
    cache: new InMemoryCache(),
  })

  const { data } = await client.query({
    query: gql`
      query GetPosts {
        user(username: "chrisdevcode") {
          publication {
            posts(page: 0) {
              _id
              coverImage
              slug
              title
              brief
              dateAdded
              dateUpdated
            }
          }
        }
      }
    `,
  })

  return {
    props: {
      posts: data.user.publication.posts,
    },
  }
}
