import React from 'react'
import { Box, Image, Heading, Text } from '@chakra-ui/react'
import {perkContentInterface} from '../../constant'
export const PerksCard = ({perkImage, perkTitle, perkText}: perkContentInterface) => {
  return (
    <Box>
        <Image src={perkImage} alt=""/>
        <Heading
        fontSize={["2.5rem","4.2088rem"]}
        lineHeight={["40px","4.5rem"]}
        mt={["1.5rem","2rem"]}
        textAlign="center"
        >
        {perkTitle}
        </Heading>
        <Text
        fontSize="1rem"
        lineHeight="1.5rem"
        mt={["1rem","1.5rem"]}
        textAlign="center"
        color="#535353"
        >
        {perkText}
        </Text>
    </Box>   
  )
}
