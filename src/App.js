import { useState } from 'react'
import Checkbox from './components/Checkbox'
import Selector from './components/Selector'
import beaver from './resources/beaver.png'
import SubmitButton from './components/SubmitButton'

const App = () => {
  const [urheilu, setUrheilu] = useState(null)
  const [taide, setTaide] = useState(null)
  const [musiikki, setMusiikki] = useState(null)
  const [pelit, setPeli] = useState(null)
  const [luonto, setLuonto] = useState(null)
  const [ruoka, setRuoka] = useState(null)
  const [matkailu, setMatkailu] = useState(null)
  const [joukkue, setJoukkue] = useState(null)

  const [yleinenKunto, setYleinenKunto] = useState(null)
  const [kilpailu, setKilpailu] = useState(null)
  const [luova, setLuova] = useState(null)
  const [uudetTaidot, setUudetTaidot] = useState(null)

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
      yleinenKunto,
      kilpailu,
      luova,
      uudetTaidot,
    }
    console.log(data)
  }

  return (
    <div>
      <div className='grid grid-cols-4 gap-4 margin-4 m-4'>
        <img src={beaver} alt='logo' className='w-24 animate-bounce' />
        <div className='col-span-3 bg-white flex pt-2 pb-2 rounded-lg'>
          <div className='m-auto text-2xl'>Aloituskysely</div>
        </div>
      </div>

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
        <div className='border border-white-300 rounded-lg bg-white text-center'>
          Mitkä ovat tavoitteesi harrastusaktiviteettien suhteen?
        </div>
        <Checkbox
          text='Yleisen kunnon parantaminen tai fyysinen terveys'
          setValue={setYleinenKunto}
        />
        <Checkbox
          text='Kilpailu tai itsensä haastaminen'
          setValue={setKilpailu}
        />
        <Checkbox text='Luova itseilmaisu' setValue={setLuova} />
        <Checkbox
          text='Uusien taitojen oppiminen tai uusien asioiden kokeileminen'
          setValue={setUudetTaidot}
        />
        <SubmitButton onSubmit={onSubmit} />
      </div>
    </div>
  )
}

export default App
