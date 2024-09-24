import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Heading from './component/Heading'
import Paragraph from './component/Paragraph'
import ClockCurrentTime from './component/ClockCurrentTime'
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
 

  return (
   <center>
    <Heading></Heading>
    <Paragraph></Paragraph>
    <ClockCurrentTime/>
    </center>
  )
}

export default App
