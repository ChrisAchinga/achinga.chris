fetch:

```javascript
async function gql(query, variables = {}) {
  const data = await fetch('https://api.hashnode.com/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  return data.json()
}
```

get articles query

```javascript
const GET_USER_ARTICLES = `
    query GetUserArticles($page: Int!) {
        user(username: "<your_Hashnode_username>") {
            publication {
                posts(page: $page) {
                    title
                    brief
                    slug
                }
            }
        }
    }
`
```

TEST:

script.js

```javascript
const query = `
{
  user(username:"chrisdevcode") {
    publication {
      posts {
        title
        brief
        slug
        cuid
      }
    }
  }
}`
async function getData() {
  const response = await fetch('https://api.hashnode.com', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query: query }),
  })
  const body = await response.json()
  let html = ''
  body.data.user.publication.posts.forEach((post) => {
    html += `<li>${post.title}</li>`
  })
  html = `<ul>${html}</ul>`
  document.getElementById('app').innerHTML = html
}

getData()
```
