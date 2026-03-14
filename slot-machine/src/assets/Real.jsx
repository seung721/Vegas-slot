export default function Reel({symbols, spinning, offset}){

  return (

    <div className="reel-window">

      <div
        className={`reel-strip ${spinning ? "spin" : ""}`}
        style={{
          transform:`translateY(-${offset*120}px)`
        }}
      >

        {symbols.concat(symbols).concat(symbols).map((s,i)=>(
          <div key={i} className="symbol">
            {s}
          </div>
        ))}

      </div>

    </div>

  )

}
