import { useState } from "react"
import Reel from "./assets/Reel"
import Lever from "./assets/Lever"
import "./App.css"

const symbols = ["🍒","🍄","💎","7️⃣","⭐","🍊","☠️","💰"]

export default function App(){

  const [spinning,setSpinning] = useState(false)

  const [offsets,setOffsets] = useState([0,0,0])

  function spin(){

    if(spinning) return

    setSpinning(true)

    const r1 = Math.floor(Math.random()*symbols.length)
    const r2 = Math.floor(Math.random()*symbols.length)
    const r3 = Math.floor(Math.random()*symbols.length)

    setTimeout(()=>{
      setOffsets(prev=>[r1,prev[1],prev[2]])
    },1500)

    setTimeout(()=>{
      setOffsets(prev=>[prev[0],r2,prev[2]])
    },2200)

    setTimeout(()=>{
      setOffsets([r1,r2,r3])
      setSpinning(false)
    },2900)

  }

  return(

    <div className="page">

      <div className="machine">

        <div className="machine-top">
          Vegas Slot
        </div>

        <div className="machine-body">

          <div className="reels">

            <Reel
              symbols={symbols}
              spinning={spinning}
              offset={offsets[0]}
            />

            <Reel
              symbols={symbols}
              spinning={spinning}
              offset={offsets[1]}
            />

            <Reel
              symbols={symbols}
              spinning={spinning}
              offset={offsets[2]}
            />

          </div>

          <Lever onPull={spin} />

        </div>

      </div>

    </div>

  )

}
