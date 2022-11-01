import '../styles/global.css'
import { Scale } from '@tonaljs/tonal'
import { Keyboard } from '../components/Keyboard/Keyboard'


export default function Home() {

  const scale = Scale.scale('C major').notes

  return (
    <div><Keyboard /></div>
  )
}
