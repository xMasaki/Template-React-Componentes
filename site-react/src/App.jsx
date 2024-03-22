import { useState } from 'react'
import Banner from './Componentes/Banner/Banner'
import Rodape from './Componentes/Rodape/Rodape'
import ConteudoPrincipal from './Componentes/ConteudoPrincipal/ConteudoPrincipal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Banner/>
      <ConteudoPrincipal/>
      <Rodape/>
    </>
  )
}

export default App
