import React from "react";
import {
  Box,
  Text,
  Heading,
  Flex,
  Image,
  Button,
  HStack,
  Center,
} from "@chakra-ui/react";
import { MainContainer } from "../../layout";
export const Hero = () => {
  return (
    <Box ml={["5%"]} mt={["4%"]} mb={["10%"]}>
      <Flex justifyContent="space-between" alignItems="center">
        <Box maxWidth="50%">
          <Heading fontSize="5.61rem" lineHeight="6rem">
            Instant credit at your fingertips.
          </Heading>

          <Text
            fontSize="1rem"
            lineHeight="1.5rem"
            mt="1.5rem"
            fontWeight="450"
            width={"95%"}
          >
            One-stop destination for quick and hassle-free credit with a
            user-friendly website and simple application process make it easy
            for you to apply for a loan and get approved.
          </Text>

          <HStack
            height="53.55px"
            width="100%"
            alignItems="center"
            cursor="pointer"
            mt="3.5625rem"
          >
            <Box width="25%" height="100%">
              <Image src="assets/images/home/appStore.png" alt="appStore" />
            </Box>
            <Box width="25%" height="100%">
              <Image
                objectFit="cover"
                borderRadius="0.5rem"
                height="100%"
                width="100%"
                src="assets/images/home/googlePlayStore.png"
                alt="playstore"
              />
            </Box>
          </HStack>

          <Flex mt="4.0625rem" columnGap="2rem">
            <Box>
              <Text
                fontSize=".75rem"
                fontWeight="700"
                color="#535353"
                mb="0.5rem"
              >
                LICENSED BY:
              </Text>
              <Box>
                <Box display="flex" columnGap="1rem" alignItems="center">
                  <Center
                    bg="brand.orange.100"
                    w="2.5rem"
                    h="2.5rem"
                    borderRadius="0.5rem"
                  >
                    <Image src="assets/icons/badge.svg" alt="heroIcon1" />
                  </Center>
                  <Box w="37px" height="40px">
                    <Image src="assets/icons/cbnLogo.png" alt="" />
                  </Box>
                  <Text fontSize="1rem" fontWeight="700">
                    Central Bank of Nigeria
                  </Text>
                </Box>
              </Box>
            </Box>

            <Box>
              <Text
                fontSize=".75rem"
                fontWeight="700"
                color="#535353"
                mb="0.5rem"
              >
                DEPOSITS INSURED BY:
              </Text>
              <Box>
                <Box display="flex" columnGap="0.5rem" alignItems="center">
                  <Center
                    bg="brand.orange.100"
                    w="2.5rem"
                    h="2.5rem"
                    borderRadius="0.5rem"
                  >
                    <Image src="assets/icons/shieldCheck.svg" alt="heroIcon2" />
                  </Center>
                  <Box w="103.47px" height="40px">
                    <Image src="assets/icons/ndicLogo.png" alt="" />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Flex>
        </Box>
        <Box maxWidth="40%">
          <Image src="assets/images/home/heroImage.png" alt="hero" />
        </Box>
      </Flex>
    </Box>
  );
};
