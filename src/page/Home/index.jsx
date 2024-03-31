import React from 'react'
import NavBar from '../../components/navBar'
import Hero from '../../Layouts/Hero'
import LiquidityProvision from '../../Layouts/LiquidityProvision'
import LongVolitality from '../../Layouts/LongVoility'
import EarnProviding from '../../Layouts/EarnProviding'

function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <LiquidityProvision />
      <LongVolitality />
      <EarnProviding/>
    </>
  )
}

export default Home
