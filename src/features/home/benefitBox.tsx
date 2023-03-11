import React from 'react'
import {Box, Image, Heading, Text} from '@chakra-ui/react'
import {benefitInterface} from '../../constant'
export const BenefitBox = ({benefitTitle, benefitText, benefitImage}: benefitInterface) => {
  return (
    <Box
    backgroundColor="#F0F0F0"
    py="4.25rem"
    px="2rem"
    width="100%"
    borderRadius="1rem"
    >
        <Box>
            <Image src={benefitImage} alt=""/>
        </Box>
        <Heading
        mt="3.9375rem"
        fontSize="50.52px"
        color="brand.black"
        >
        {benefitTitle}
        </Heading>
        <Text
        color="#535353"
        fontSize="1rem"
        lineHeight="1.5rem"
        mt="1rem"
        >
            {benefitText}
        </Text>
    </Box>
  )
}
