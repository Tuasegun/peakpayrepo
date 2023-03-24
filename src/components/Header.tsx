import React, {useState} from 'react'
import {Box, Image, Text, Flex} from '@chakra-ui/react'
import { MainContainer } from '../layout'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { MobileHeader } from './MobileHeader'
import { NavLink } from 'react-router-dom'
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
         <NavLink to="/">   
       <Box
        width="132.86px"
        height="32px"
        cursor="pointer"
        >
            <Image 
            width="100%"
            height="100%"
            objectFit="contain"
            src="/assets/icons/logo.png" alt="logo" />
        </Box>
        </NavLink>

        <Flex 
        columnGap="48px"
        cursor="pointer"
        display={['none', 'flex']}
        >
            <NavLink to="/">
            <Text
            fontSize="1rem"
            fontWeight="700"
            color="brand.black"
            _hover={{color: "brand.orange.200"}}
            >
                Products
            </Text>
            </NavLink>
            <NavLink to="/about">
            <Text
             fontSize="1rem"
             fontWeight="700"
             color="brand.black"
             _hover={{color: "brand.orange.200"}}
            >
                About
            </Text>
            </NavLink>
            <NavLink to="/terms">
            <Text
             fontSize="1rem"
             fontWeight="700"
             color="brand.black"
             _hover={{color: "brand.orange.200"}}
            >
              Terms
            </Text>
            </NavLink>
            <NavLink to="/faq">
            <Text
             fontSize="1rem"
             fontWeight="700"
             color="brand.black"
             _hover={{color: "brand.orange.200"}}
            >
                FAQ
            </Text>
            </NavLink>
        </Flex>

        <Box
        display={['flex', 'none']}
        >
            {
                isOpen ? <AiOutlineClose onClick={() => setIsOpen(false)} size="2rem" /> : <AiOutlineMenu size="2rem" onClick={() => setIsOpen(true)} />
            }
        </Box>
       </Flex>
       {
            isOpen && <MobileHeader closeHeader={() => setIsOpen(!isOpen)} />
        }
        
    </MainContainer>
    </Box>
  )
}
