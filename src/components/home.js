import React from 'react'
import Header from './header'


const Home = ({ location }) => {
  return (
    <div>
      <Header location={location} />
      <main className='main'>
        <h1>Home</h1>
      </main>
    </div>
  )
}

export default Home
