import React from 'react'
import {Box, Image, Text, Flex} from '@chakra-ui/react'
import { MainContainer } from '../layout'
export const Header = () => {
  return (
    <Box 
    pos="sticky"
    py={['2rem']}
    >
    <MainContainer bg="none">
       <Flex columnGap="10%" alignItems="center">
       <Box
        width="132.86px"
        height="32px"
        cursor="pointer"
        >
            <Image 
            width="100%"
            height="100%"
            objectFit="contain"
            src="assets/icons/logo.png" alt="logo" />
        </Box>

        <Flex 
        columnGap="48px"
        cursor="pointer"
        >
            <Text
            fontSize="1rem"
            fontWeight="700"
            color="brand.black"
            _hover={{color: "brand.orange.200"}}
            >
                Products
            </Text>
            <Text
             fontSize="1rem"
             fontWeight="700"
             color="brand.black"
             _hover={{color: "brand.orange.200"}}
            >
                About
            </Text>
            <Text
             fontSize="1rem"
             fontWeight="700"
             color="brand.black"
             _hover={{color: "brand.orange.200"}}
            >
                Blog
            </Text>
            <Text
             fontSize="1rem"
             fontWeight="700"
             color="brand.black"
             _hover={{color: "brand.orange.200"}}
            >
                FAQ
            </Text>
        </Flex>
       </Flex>

        
    </MainContainer>
    </Box>
  )
}
