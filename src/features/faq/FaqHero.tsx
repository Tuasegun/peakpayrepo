import React from 'react'
import {Box,Flex, Heading, Text, Image, Center} from '@chakra-ui/react'
export const FaqHero = () => {
  return (
    <Center
     height="80vh"
     p={["5%", "5%"]}
    >
     <Flex
      justifyContent="space-between"
      alignItems="center"
      flexDirection={["column","row"]}
      rowGap="3rem"
      >
        <Box
        width={["100%","70%"]}
        >
        <Heading
        fontSize={["3rem","5.61rem"]}
        lineHeight={["3.5rem","6rem"]}
        >
          Frequently 
        </Heading>
        <Heading
         fontSize={["3rem","5.61rem"]}
         lineHeight={["3.5rem","6rem"]}
        >
        Asked Questions
        </Heading>
        <Text>
        Having any issues you need resolved? We’ve got you covered
        </Text>
        </Box>

        <Box
        width={["100%","20%"]}
        px={["5%","0"]}
        >
          <Box width="100%">
            <Image src="assets/images/faq/faqHero.png" alt="faqHero" />
          </Box>
        </Box>
      </Flex>
      </Center>
  )
}
