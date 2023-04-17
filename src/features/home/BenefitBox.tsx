import React from 'react'
import {Box, Image, Heading, Text} from '@chakra-ui/react'
import {benefitInterface} from '../../constant'
export const BenefitBox = ({benefitTitle, benefitText, benefitImage, textSpacing}: benefitInterface) => {
  return (
    <Box
    backgroundColor="#F0F0F0"
    py={["2.125rem","4.25rem"]}
    px="2rem"
    width="100%"
    borderRadius="1rem"
    position="relative"
    >
        <Box
        maxHeight={ ["auto","27.0194rem"]}
        px={["0","3.75rem"]}
        position="relative"
        w="full"
        >
            <Image h="100%" w="full" src={benefitImage} alt="" objectFit="contain"/>
        </Box>
        <Heading
        mt={["1.5rem", `${textSpacing}`]}
        fontSize={["1.5rem","3.1575rem"]}
        color="brand.black"
        position="relative"
        >
        {benefitTitle}
        </Heading>
        <Text
        color="#535353"
        fontSize={["0.9rem","1rem"]}
        lineHeight={["1.3rem", "1.5rem" ]}
        mt="1rem"
        >
            {benefitText}
        </Text>
    </Box>
  )
}
