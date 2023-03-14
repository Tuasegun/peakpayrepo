import React from 'react'
import {Box, Center, HStack, Heading, Input, Button} from '@chakra-ui/react'
import {CgArrowRight} from 'react-icons/cg'
import {MainContainer} from '../../layout'
export const ContactForm = () => {
  return (
    <MainContainer bg="none">
    <Box
    py="6.5rem"
    >
        <Center
        flexDirection="column"
        >
            <Heading
            fontSize={["2rem","3.1575rem"]}
            lineHeight={["2.5rem","3.5rem"]}
            textAlign="center"
            >
            Stay Updated in your Inbox
            </Heading>

            <HStack mt="2rem" width="100%" flexDirection={["column", "row"]} gap={"1rem"} justifyContent={"center"}>
                <Input width={["100%","50%"]} placeholder="Enter your email address" />
                <Button bg="#000101" color="#FFF" fontSize="1rem" rightIcon={<CgArrowRight/>}>
                Subscribe
                </Button>
            </HStack>
        </Center>
    </Box>
    </MainContainer>
  )
}
