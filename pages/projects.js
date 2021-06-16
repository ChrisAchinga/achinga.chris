import Layout from '@/layout/Layout'

const Projects = ({ repos }) => {
  console.log('GitHub REPOS', repos)
  return (
    <Layout
      pageTitle='Chris Achinga Projects'
      pageDescription='All ChrisDevCode Projects'
      pageURL='https://chrisdev.vercel.app/projects'
    >
      <h1>My Projects</h1>
      <p>My Projects explanations and bla bla goes here</p>

      <h2>GitHUB Repos</h2>

      {repos.map(repo => {
        return (
          <div key={repo.id}>
            <h3>{repo.name}</h3>
          </div>
        )
      })}
    </Layout>
  )
}

export default Projects

export async function getStaticProps(context) {
  const res = await fetch(
    'https://api.github.com/users/chrisachinga/repos?sort=updated&per_page=20'
  )
  const repos = await res.json()

  return {
    props: { repos },
    revalidate: 1,
  }
}
