import { useState } from 'react'
import Checkbox from './components/Checkbox'
import Selector from './components/Selector'
import beaver from './resources/beaver.png'
import SubmitButton from './components/SubmitButton'

const App = () => {
  const [urheilu, setUrheilu] = useState(null)
  const [taide, setTaide] = useState(null)
  const [musiikki, setMusiikki] = useState(null)
  const [tanssi, setTanssi] = useState(null)
  const [pelit, setPeli] = useState(null)
  const [luonto, setLuonto] = useState(null)
  const [ruoka, setRuoka] = useState(null)
  const [matkailu, setMatkailu] = useState(null)
  const [joukkue, setJoukkue] = useState(null)

  const [yleinenKunto, setYleinenKunto] = useState(null)
  const [kilpailu, setKilpailu] = useState(null)
  const [luova, setLuova] = useState(null)
  const [uudetTaidot, setUudetTaidot] = useState(null)

  const urheilulajit = [
    'juoksu',
    'uinti',
    'jalkapallo',
    'koripallo',
    'tennis',
    'sulkapallo',
    'koripallo',
    'kuntosaliharjoittelu',
    'judo',
    'futsal',
    'salibandy',
    'nyrkkeily',
    'padel',
    'squash',
    '',
  ]

  const taidelajit = [
    'maalaaminen',
    'kuvanveisto',
    'keramiikan teko',
    'ompelu',
    'neuolominen',
    'korujen tekeminen',
  ]

  const musiikkilajit = [
    'soittaminen',
    'räppääminen',
    'kuorossa laulaminen',
    'bändissä soittaminen',
    'DJ soittaminen',
  ]

  const tanssilajit = [
    'tanssi',
    'baletti',
    'zumba',
    'breakdance',
    'tango tanssi',
  ]

  const pelaaminen = [
    'tietokonepelaaminen',
    'konsolipelaaminen',
    'lautapelailu',
    'korttipelaaminen',
    'Dungeons and Dragons',
  ]

  const luontolajit = [
    'retkeily',
    'kalastus',
    'metsästys',
    'puutarhanhoito',
    'patikointi',
  ]

  const ruokaharrastukset = [
    'kokkaaminen',
    'leipominen',
    'viininvalmistus',
    'oluenpano',
    'puutarhanhoito',
  ]

  const matkailuharrastukset = [
    'vaellus',
    'maastopyöräily',
    'sukellus',
    'surffaus',
    'maantipyöräily',
    'laskettelu',
  ]

  const yksin = [
    'Lukeminen',
    'Kirjoittaminen',
    'Piirtäminen',
    'maalaaminen',
    'Valokuvaus',
    'soittaminen',
    'juokseminen',
    'jooga',
    'Puutarhanhoito',
    'neulominen',
    'virkkaus',
    'Retkeily',
    'ompelu',
  ]

  function calculateHobby() {
    let currentPool = []
    function selectFrom(pool, lajiLuku) {
      const poolLen = pool.length - 1
      if (lajiLuku) {
        for (let i = 0; i < lajiLuku - 1; i++) {
          const randLuku = Math.floor(Math.random() * poolLen)
          currentPool.push(pool[randLuku])
        }
      }
    }

    selectFrom(urheilulajit, urheilu)
    selectFrom(taidelajit, taide)
    selectFrom(musiikkilajit, musiikki)
    selectFrom(pelaaminen, pelit)
    selectFrom(luontolajit, luonto)
    selectFrom(ruokaharrastukset, ruoka)
    selectFrom(matkailuharrastukset, matkailu)
    selectFrom(yksin, joukkue)
    selectFrom(tanssilajit, tanssi)

    if (yleinenKunto) {
      currentPool.push(
        urheilulajit[Math.floor(Math.random() * urheilulajit.length)]
      )
      currentPool.push(
        tanssilajit[Math.floor(Math.random() * tanssilajit.length)]
      )
    }
    if (kilpailu) {
      currentPool.push(
        urheilulajit[Math.floor(Math.random() * urheilulajit.length)]
      )
    }
    if (luova) {
      currentPool.push(
        taidelajit[Math.floor(Math.random() * taidelajit.length)]
      )
      currentPool.push(
        ruokaharrastukset[Math.floor(Math.random() * ruokaharrastukset.length)]
      )
    }
    if (uudetTaidot) {
      currentPool.push(
        taidelajit[Math.floor(Math.random() * taidelajit.length)]
      )
      currentPool.push(
        tanssilajit[Math.floor(Math.random() * tanssilajit.length)]
      )
    }
    console.log(currentPool)
    return currentPool
  }

  const onSubmit = () => {
    const harrastus = calculateHobby()
    if (harrastus.length < 1) {
      alert('Sinulle ei pystytty arpomaan sopivaa lajia!')
    } else {
      alert(
        'Sinulle arvottu laji on: ' +
          harrastus[Math.floor(Math.random() * harrastus.length)]
      )
    }
  }

  return (
    <div>
      <div className='grid grid-cols-4 gap-4 margin-4 m-4'>
        <img src={beaver} alt='logo' className='w-24 animate-bounce' />
        <div className='col-span-3 bg-white flex pt-2 pb-2 border rounded-3xl text-xl font-mono font-semibold shadow-2xl'>
          <div className='m-auto text-2xl'>Alkukysely</div>
        </div>
      </div>

      <div
        className='grid grid-cols-1 gap-4 p-4 rounded-t-3xl bg-teal-100'
        style={{
          backgroundColor: '#FFF8F8',
        }}
      >
        <Selector
          text={'Kuinka paljon pidät urheilusta ja kuntoilusta?'}
          setValue={setUrheilu}
        />
        <Selector
          text={'Kuinka paljon pidät taiteista ja käsitöistä?'}
          setValue={setTaide}
        />
        <Selector
          text={'Kuinka paljon pidät musiikista?'}
          setValue={setMusiikki}
        />
        <Selector
          text={'Kuinka paljon pidät tanssista?'}
          setValue={setTanssi}
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
          text={'Pidätkö enemmän yksilölajeista kuin joukkuelajeista?'}
          setValue={setJoukkue}
        />
      </div>
      <div
        style={{
          backgroundColor: '#FFF8F8',
        }}
      >
        <div className='grid grid-cols-1 gap-4 p-4 rounded-t-3xl bg-teal-200'>
          <div className='border border-white-300 rounded-lg bg-white text-center text-lg font-mono font-semibold'>
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
    </div>
  )
}

export default App
