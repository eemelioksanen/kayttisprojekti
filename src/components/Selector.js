import { useState } from 'react'

const Fields = ({ setValue }) => {
  const emoji = [...'😭🙁😐🙂😍']

  var [selected, setSelected] = useState(null)

  const handleChange = (n) => {
    setValue(n + 1)
    setSelected(n)
  }

  return [...Array(5).keys()].map((n) =>
    selected === n ? (
      <div key={n} className='flex pt-2 pb-2 rounded-xl bg-red-300'>
        <div className='m-auto text-2xl'>{emoji[n]}</div>
      </div>
    ) : (
      <div
        key={n}
        className='flex pt-2 pb-2 bg-white rounded-xl shadow-md border border-black'
        onClick={() => handleChange(n)}
      >
        <div className='m-auto text-2xl'>{emoji[n]}</div>
      </div>
    )
  )
}

const Selector = ({ text, setValue }) => {
  return (
    <div>
      <div className='grid grid-cols-5 gap-4 mb-4 '>
        <div className='col-span-5 text-center text-xl font-mono font-semibold'>
          {text}
        </div>
        <Fields setValue={setValue} />
      </div>
    </div>
  )
}

export default Selector
