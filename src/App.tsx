import { useState } from 'react'
import {ChakraProvider} from '@chakra-ui/react'
import {theme} from './config/theme'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Faq from './pages/Faq'
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
      </Router>
    </ChakraProvider>
  )
}

export default App
