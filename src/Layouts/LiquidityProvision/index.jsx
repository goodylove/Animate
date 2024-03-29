import React from 'react'
import { Button } from './../../components/common/Button/index';

function LiquidityProvision() {
  return (
      <div>
          <div>
        <h5>Liquidity Provisioning</h5>
        <h1>Earn by Providing
          Liquidity</h1>
        <p>Earn a higher yield by providing liquidity through GammaSwap.
          Think of our wrapped pools like wrapped tokens.</p>
        <p>The GammaSwap protocol will directly deposit liquidity into
         the underlying AMM and provide an LP token to the depositor
          representing the position.</p>
        
        <Button className="bg-gray-500 text-white p-3">Learn More</Button>
              
          </div>
          <div>
              <img src="" alt="" />
              <img src="" alt="" />
          </div>
    </div>
  )
}

export default LiquidityProvision