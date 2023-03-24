import { useState } from 'react'
import {ChakraProvider} from '@chakra-ui/react'
import {theme} from './config/theme'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Faq from './pages/Faq'
import TermsPage from './pages/TermsPage'
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/terms" element={<TermsPage />} />
        </Routes>
      </Router>
    </ChakraProvider>
  )
}

export default App
