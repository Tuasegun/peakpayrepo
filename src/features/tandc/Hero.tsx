import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'
export const Hero = () => {
  return (
    
    <Box
    display="flex"
    justifyContent={["center","flex-end"]}
    width="100%"
    alignItems={["center","flex-end"]}
    
    >
      <Box
      width={["100%","60%"]}
      display={"flex"}
      flexDir="column"
      justifyContent={["center","flex-end"]}
      >
        <Heading
        fontSize={["2.5rem","4.2088rem"]}
        fontWeight="700"
        color="brand.black"
        textAlign={["center","left"]}
        >
        Terms and Conditions
        </Heading>
        <Text
        color="#535353"
        fontSize={["1rem"]}
        textAlign={["center","left"]}
        mt={"1.5rem"}
        >
        Last updated: 2021-01-01
        </Text>
    </Box>
    </Box>
  )
}
