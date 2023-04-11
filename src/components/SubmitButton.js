const SubmitButton = ({ onSubmit }) => {
  return (
    <div className='container min-w-full flex flex-col'>
      <button
        type='submit'
        className='text-white pl-10 pr-10 border border-green-300 mt-10 rounded-2xl bg-green-500 h-10 text-center'
        onClick={onSubmit}
      >
        Valmis!
      </button>
    </div>
  )
}

export default SubmitButton
