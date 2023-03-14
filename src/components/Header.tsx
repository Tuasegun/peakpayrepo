import React, {useState} from 'react'
import {Box, Image, Text, Flex} from '@chakra-ui/react'
import { MainContainer } from '../layout'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { MobileHeader } from './MobileHeader'
export const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <Box 
    pos="sticky"
    py={['2rem']}
    >
    <MainContainer bg="none">
       <Flex columnGap="10%" alignItems="center"
         justifyContent={["space-between", "flex-start"]}
       >
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
        display={['none', 'flex']}
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

        <Box
        display={['flex', 'none']}
        >
            {
                isOpen ? <AiOutlineClose onClick={() => setIsOpen(false)} size="2rem" /> : <AiOutlineMenu size="2rem" onClick={() => setIsOpen(true)} />
            }
        </Box>
        {
            isOpen && <MobileHeader />
        }
       </Flex>

        
    </MainContainer>
    </Box>
  )
}
