import React, {Fragment, PropsWithChildren} from 'react'
import { Box } from '@chakra-ui/react'
import { Footer, Header } from '../components'

export const MainLayout = ({children}: PropsWithChildren) => {
  return (
    <Fragment>
        <Header/>
        {children}
        <Footer/>
    </Fragment>
  )
}
