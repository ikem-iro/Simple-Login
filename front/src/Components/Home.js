import React from 'react'

const Home = ({ name }) => {
  console.log(name)
  return (
    <div className='home'>
        <h2>Welcome to my Humble Abode {name.firstName} {name.lastName}</h2>
    </div>
  )
}

export default Home