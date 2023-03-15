import React from 'react'
import { Box, Text, VStack} from '@chakra-ui/react'
export const MobileHeader = () => {
  return (
    <Box
    position="sticky"
    h='calc(100vh - 4rem)'
    left="0"
    right="0"
    zIndex="999"
    bg="brandwhite"
    p="1rem"
   w="full"
   

    >
        <VStack
        gap="2rem"
        >
            <Text fontSize="1.5rem" fontWeight="700">
                Products
            </Text >
            <Text fontSize="1.5rem" fontWeight="700">
                About
            </Text>
            <Text fontSize="1.5rem" fontWeight="700">
                Blog
            </Text>
            <Text fontSize="1.5rem" fontWeight="700">
                FAQ
            </Text>
        </VStack>
    </Box>
  )
}
