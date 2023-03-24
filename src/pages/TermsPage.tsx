import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'
import { TermsContent, Navigator, Hero } from '../features/tandc'
import { MainLayout } from '../layout'
const TermsPage = () => {
  return (
    <MainLayout>
    <Box
    px={["5%","10%"]}
    py={["10%"]}
    >
        <Hero/>
      <Box
      display="flex"
      justifyContent={"space-between"}
      mt={["3.5rem"]}
      >
        < Box
         width="35%"
         display={['none', "block"]}
        >
        <Navigator/>
        </Box>
        <Box
        w={["100%","60%"]}
        alignSelf={"flex-end"}
       
        >
        <TermsContent/>
        </Box>
        </Box>
    </Box>
    </MainLayout>
  )
}

export default TermsPage