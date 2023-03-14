import React from 'react'
import {Box, Text, Image, Heading, Button} from '@chakra-ui/react'
import { MainContainer } from '../../layout'
import {CgArrowRight} from 'react-icons/cg'
export const Accessible = () => {
  return (
    <Box
    py={["5%","2.5%"]}
    position="relative"
    >
    <MainContainer bg="none">
        <Box
        display="flex"
        bg="brand.darkBlue"
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        justifyContent={['center', 'space-between']}
        width="100%"
        alignItems="center"
        px="3%"
        borderRadius="1rem"
        position="relative"
        flexDirection={["column", "row"]}
        py={['2rem', '0rem']}
        >
             <Box
            position="absolute"
            width="auto"
            height="100%"
            zIndex={1}
            opacity={0.1}
            left="0"
            >
                <Image 
                width="100%"
                height="100%"
                src="assets/images/home/accessibleBg.png" alt="bgImg" />
            </Box>
            
            <Box
            width={["100%","40%"]}
            color="brand.white"
            zIndex={2}
            >
                <Heading fontSize={["2rem","3.1575rem"]} lineHeight={["2.5rem","3.5rem"]}>
                Accessible and quick loans
                </Heading>
                <Text
                mt="1rem"
                fontSize={"1rem"}
                lineHeight="1.5rem"
                color="#A7AEA8"
                >
                Easily and quickly apply for loan with our hassle-free process created to get you that loan.
                </Text>
                <Button 
                fontWeight={500}
                rightIcon={<CgArrowRight/>}
                mt="1rem"
                >
                Download PeakPay
                </Button>
            </Box>
            <Box  zIndex={2}  width="50%" display={["none", "block"]}>
            <Box
            width="100%"
            height="100%"
            >
                <Image src="assets/images/home/accessibleImage.png" alt=""/>
            </Box>
            </Box>
        </Box>
    </MainContainer>
    </Box>
  )
}
