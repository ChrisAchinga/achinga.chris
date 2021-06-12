// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.status(200).json({
    fullName: 'Chris Achinga',
    location: 'Mombasa, Kenya',
    contacts: [
      {
        id: 1,
        name: 'email',
        address: 'achinga.chris@gmail.com',
      },
      {
        id: 2,
        name: 'phone',
        address: '+254740428522',
      },
    ],
    social: [
      {
        id: 1,
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/in/chrisachinga/',
      },
      {
        id: 2,
        name: 'Twitter',
        link: 'https://twitter.com/achinga_chris',
      },
      {
        id: 3,
        name: 'Pinterest',
        link: 'https://www.pinterest.com/chrisdevcode/',
      },
      {
        id: 4,
        name: 'Instagram',
        link: 'https://www.instagram.com/chrisdevcode/',
      },
      {
        id: 5,
        name: 'Facebook',
        link: 'https://www.facebook.com/chrisdevcode',
      },
    ],
  })
}
