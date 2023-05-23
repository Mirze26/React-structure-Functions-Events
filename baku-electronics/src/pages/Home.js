import React from 'react'
import Footer from '../component/layouts/Footer'
import Header from '../component/layouts/Header'
import Mains from '../component/layouts/Main'
import Main from '../component/layouts/Main'

function Home() {
  return (
    <>
      <header><Header/></header>
      <main><Main/></main>
      <footer><Footer/></footer>
    </>
  )
}

export default Home