import React from 'react'
import Hero from '../../Layouts/Hero'
import LiquidityProvision from '../../Layouts/LiquidityProvision'
import LongVolitality from '../../Layouts/LongVoility'
import EarnProviding from '../../Layouts/EarnProviding'
import Explore from '../../Layouts/Discover'
import { LayoutWrapper } from '../../Layouts'

function Home() {
  return (
    <div className=" w-full max-w-[700px] sm:overflow-x-visible overflow-x-hidden flex items-center ">
    <LayoutWrapper>
     
      <Hero />
      <LiquidityProvision />
      <LongVolitality />
      <EarnProviding />
      <Explore />
     
    </LayoutWrapper>
    </div>
  )
}

export default Home
