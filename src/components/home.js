import React from 'react'
import Navbar from './navbar'


const Home = ({ location }) => {
  console.log(location)
  return (
    <div>
      <Navbar location={location} />
      <main className='main'>
        <h1>Home</h1>
      </main>
    </div>
  )
}

export default Home
