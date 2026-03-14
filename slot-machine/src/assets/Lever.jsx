export default function Lever({onPull}) {

  return (

    <div className="lever">

      <div
        className="lever-ball"
        onMouseDown={onPull}
      />

    </div>

  )

}
