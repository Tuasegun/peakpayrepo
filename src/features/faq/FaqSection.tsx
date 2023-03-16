import React from 'react'
import {Box, Accordion} from '@chakra-ui/react'
import {FaqContent, FaqContentInterface} from '../../constant'
import {FaqAccordion} from './FaqAccordion'
export const FaqSection = () => {
  return (
    <Box
    padding={["3% 5%","3% 10%"]}
    bg="brand.gray"
    >
        <Box
        background="brand.white"
        p="2.5rem 1.5rem"
        >  
        <Accordion defaultIndex={[0]} allowToggle border="0px solid #FFFF">
            {
                FaqContent.map(({questionTitle, questionAnswer}: FaqContentInterface) => (
                    <FaqAccordion questionTitle={questionTitle} questionAnswer={questionAnswer}/>
                ))
            }
      </Accordion>
        </Box>
    </Box>
  )
}
