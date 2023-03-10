import { useState } from 'react'
import Selector from './components/Selector'

const App = () => {
  const [urheilu, setUrheilu] = useState(null)
  const [taide, setTaide] = useState(null)
  const [musiikki, setMusiikki] = useState(null)
  const [pelit, setPeli] = useState(null)
  const [luonto, setLuonto] = useState(null)
  const [ruoka, setRuoka] = useState(null)
  const [matkailu, setMatkailu] = useState(null)
  const [joukkue, setJoukkue] = useState(null)

  const onSubmit = () => {
    const data = {
      urheilu,
      taide,
      musiikki,
      pelit,
      luonto,
      ruoka,
      matkailu,
      joukkue,
    }
    console.log(data)
  }

  return (
    <div className='grid grid-cols-1 gap-4 margin-4 m-4'>
      <Selector
        text={'Kuinka paljon pidät urheilusta ja kuntoilusta?'}
        setValue={setUrheilu}
      />
      <Selector
        text={'Kuinka paljon pidät taiteista ja käsitöistä?'}
        setValue={setTaide}
      />
      <Selector
        text={'Kuinka paljon pidät musiikista ja tanssista?'}
        setValue={setMusiikki}
      />
      <Selector
        text={'Kuinka paljon pidät peleistä ja pelaamisesta?'}
        setValue={setPeli}
      />
      <Selector
        text={'Kuinka paljon pidät luonnosta ja ulkoilusta?'}
        setValue={setLuonto}
      />
      <Selector
        text={'Kuinka paljon pidät ruoasta ja juomasta?'}
        setValue={setRuoka}
      />
      <Selector
        text={'Kuinka paljon pidät matkailusta ja seikkailusta?'}
        setValue={setMatkailu}
      />
      <Selector
        text={'Pidätkö enemmän joukkue- vai yksilölajeista?'}
        setValue={setJoukkue}
      />
      <button onClick={() => onSubmit()} type='submit'>
        hello
      </button>
    </div>
  )
}

export default App
