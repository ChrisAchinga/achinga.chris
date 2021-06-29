export default (req, res) => {
  res.status(200).json({
    fullName: 'Chris N. Achinga',
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
    address: [
      {
        id: 1,
        city: 'Mombasa',
        country: 'Kenya',
      },
    ],
    aboutMe:
      'I have an ambitious personality and thrives on challenges. While setting new goals for myself, I aim for results that will make me more productive and effective in my environment. ',
    website: 'chrisdev.vercel.app',
    blog: 'chrisdevcode.hashnode.dev',
    
  })
}
