import React from 'react'
import { Box, Text, VStack} from '@chakra-ui/react'
export const MobileHeader = () => {
  return (
    <Box
    position="fixed"
    top='calc(100vh - 83%)'
    left="0"
    right="0"
    zIndex="999"
    bg="white"
    p="1rem"
    height={"100%"}

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
