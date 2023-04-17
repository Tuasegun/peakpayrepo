import React from 'react'
import { Box, SimpleGrid } from '@chakra-ui/react'
import  {MainContainer} from '../../layout'
import { BenefitBox } from './BenefitBoxe'
import { BenefitContent } from '../../constant'
export const Benefits = () => {
  return (
    <MainContainer bg="none">
        <SimpleGrid columns={[1, 2]} spacing="25px">
         {
                BenefitContent.map((benefit, index) => (
                    <BenefitBox key={index} {...benefit}/>
                ))
         }
        </SimpleGrid>
    </MainContainer>
  )
}
