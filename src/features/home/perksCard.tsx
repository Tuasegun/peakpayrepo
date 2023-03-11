import React from 'react'
import { Box, Image, Heading, Text } from '@chakra-ui/react'
import {perkContentInterface} from '../../constant'
export const PerksCard = ({perkImage, perkTitle, perkText}: perkContentInterface) => {
  return (
    <Box>
        <Image src={perkImage} alt=""/>
        <Heading
        fontSize="4.2088rem"
        lineHeight="4.5rem"
        mt="2rem"
        textAlign="center"
        >
        {perkTitle}
        </Heading>
        <Text
        fontSize="1rem"
        lineHeight="1.5rem"
        mt="1.5rem"
        textAlign="center"
        >
        {perkText}
        </Text>
    </Box>   
  )
}
