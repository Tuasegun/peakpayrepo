import React from 'react'
import {Box, Center, HStack, Heading, Input, Button} from '@chakra-ui/react'
import {CgArrowRight} from 'react-icons/cg'

export const ContactForm = () => {
  return (
    <Box
    py="6.5rem"
    >
        <Center
        flexDirection="column"
        >
            <Heading
            fontSize="3.1575rem"
            lineHeight="3.5rem"
            >
            Stay Updated in your Inbox
            </Heading>

            <HStack mt="2rem" width="100%" justifyContent={"center"}>
                <Input width="50%" placeholder="Enter your email address" />
                <Button bg="#003049" color="#FFF" fontSize="1rem" rightIcon={<CgArrowRight/>}>
                Subscribe
                </Button>
            </HStack>
        </Center>
    </Box>
  )
}
