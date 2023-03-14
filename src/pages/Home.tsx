import React from 'react'
import {MainLayout} from '../layout'
import {Accessible, Hero, Perks, Flexible, Benefits, DownloadBanner, ContactForm} from '../features/home'
const Home = () => {
  return (
    <>
    <MainLayout>
        <Hero/>
        <Perks/>
        <Accessible/>
        <Flexible/>
        <Benefits/>
        <DownloadBanner/>
        <ContactForm/>
    </MainLayout>
    </>
  )
}

export default Home