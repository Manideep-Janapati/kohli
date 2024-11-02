import React from 'react'
import GoogleLoginComponent from '../GoogleLoginComponent'
import FacebookLoginComponent from '../FacebookLoginComponent'

function Home() {
  return (
    <>
        <h1 style={{ color: 'red' }}>Welcome to Grocery</h1>
        <h2 style={{ color: 'black' }}> "Get upto 30% off on your total bill during Diwali sales 🎁" </h2>
        <GoogleLoginComponent/>
        <FacebookLoginComponent />
    </>
  )
}

export default Home