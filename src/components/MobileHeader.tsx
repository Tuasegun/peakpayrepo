import React from 'react'
import { Box, Text, VStack} from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'

interface MobileHeaderProps {
    closeHeader: () => void
}

export const MobileHeader = ({closeHeader}: MobileHeaderProps) => {
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
            <NavLink to="/" onClick={closeHeader}>
            <Text fontSize="1.5rem" fontWeight="700">
                Products
            </Text >
            </NavLink>
            <NavLink to="/about" onClick={closeHeader}>
            <Text fontSize="1.5rem" fontWeight="700">
                About
            </Text>
            </NavLink>

            <NavLink to="/blog" onClick={closeHeader}>
            <Text fontSize="1.5rem" fontWeight="700">
                Blog
            </Text>
            </NavLink>
            <NavLink to="/faq" onClick={closeHeader}>
            <Text fontSize="1.5rem" fontWeight="700">
                FAQ
            </Text>
            </NavLink>
        </VStack>
    </Box>
  )
}
