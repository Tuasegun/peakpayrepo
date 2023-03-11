import React from 'react'
import {Box, SimpleGrid }from '@chakra-ui/react'
import { PerksCard } from './perksCard'
import {PerkContent} from   '../../constant'
import { MainContainer } from '../../layout'

export const Perks = () => {
  return (
    <MainContainer bg="brand.gray">
    <Box
    py="6rem"
    >
       <SimpleGrid columns={[1, 2, 3]} spacing="25px">
       {
            PerkContent.map((perk, index) => (
                <PerksCard key={index} {...perk}/>
             ))
        }   
     </SimpleGrid>

    </Box>
    </MainContainer>
  )
}
