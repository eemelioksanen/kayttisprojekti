import { useId } from 'react'

const Checkbox = ({ text, setValue }) => {
  const id = useId()

  return (
    <div className='items-center grid grid-cols-1 gap-2'>
      <div className='bg-teal-400 rounded-lg p-2'>
        <input
          id={id}
          type='checkbox'
          value=''
          className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
          onChange={(e) => setValue(e.target.checked)}
        />
        <label
          htmlFor={id}
          className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
        >
          {text}
        </label>
      </div>
    </div>
  )
}

export default Checkbox
