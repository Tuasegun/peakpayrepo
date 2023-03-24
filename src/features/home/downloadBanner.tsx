import React from 'react'
import { Box, Heading, Container, Center, HStack, Image, Flex } from '@chakra-ui/react'
import { MainContainer } from '../../layout'

export const DownloadBanner = () => {
  return (
   <MainContainer bg="none">
        <Box
        bg="brand.orange.200"
        py={["1.5rem","7rem"]}
        my="2rem"
        borderRadius={"1rem"}
        position="relative"

        >
             <Box
            position="absolute"
            width="auto"
            height="100%"
            zIndex={1}
            top="0"
            left="0"
            >
                <Image 
                width="100%"
                height="100%"
                src="/assets/images/home/downloadBg.png" alt="bgImg" />
            </Box>
            <Center
            flexDirection={"column"}
            alignItems="center"
            justifyContent={"center"}
            >
                <Heading textAlign="center" color="brand.white" fontSize={["2.5rem","67.34px"]} maxW={["100%","70%"]} lineHeight={["3rem","72px"]}>
                Instant credit for you. Download peakpay
                </Heading>

                <Flex
                width={"100%"}
                height="auto"
            justifyContent="center"
            alignItems="center"
            cursor="pointer"
            mt="3.5625rem"
            gap="1.5rem"
            flexDir={["column", "row"]}
          >
            <Box width={["70%","15%"]} height="auto">
              <Image height="100%"  objectFit="contain" src="/assets/images/home/appStore.png" alt="appStore" />
            </Box>
            <Box width={["70%","15%"]} height="auto">
              <Image
                objectFit="contain"
                borderRadius="0.5rem"
                height="100%"
                width="100%"
                src="/assets/images/home/googlePlayStore.png"
                alt="playstore"
              />
            </Box>
          </Flex>
            </Center>
        </Box>
    </MainContainer>
  )
}
