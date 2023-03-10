import { useState } from 'react'

const Fields = ({ setValue }) => {
  const emoji = [...'😭🙁😐🙂😍']

  var [selected, setSelected] = useState(null)

  const handleChange = (n) => {
    setValue(n + 1)
    setSelected(n)
    console.log(selected)
  }

  return [...Array(5).keys()].map((n) =>
    selected === n ? (
      <div
        key={n}
        className='flex pt-2 pb-2 border border-white-300 bg-lime-200 rounded-lg dark:border-gray-700'
      >
        <div className='m-auto text-2xl'>{emoji[n]}</div>
      </div>
    ) : (
      <div
        key={n}
        className='flex pt-2 pb-2 border border-green-500 bg-green-400 rounded-lg dark:border-gray-700'
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
      <div className='col-span-4 text-center'>{text}</div>
      <div className='grid grid-cols-5 gap-4 mb-4'>
        <Fields setValue={setValue} />
      </div>
    </div>
  )
}

export default Selector
