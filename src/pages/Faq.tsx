import React from 'react'
import { FaqHero, FaqSection } from '../features/faq/'
import { MainLayout } from '../layout'
const Faq = () => {
  return (
    <div>
      <MainLayout>
      <FaqHero/>
      <FaqSection/>
      </MainLayout>
    </div>
  )
}

export default Faq