import React from "react";
import {
  Box,
  Text,
  Image,
  Heading,
  Flex,
  List,
  ListItem,
  Center
} from "@chakra-ui/react";
import { MainContainer } from "../layout";
import {SocialIcon} from '../constant'

export const Footer = () => {
  return (
    <MainContainer bg="#00283D">
      <Box py={["4rem","6.625rem"]}>
        <Flex rowGap={'2rem'} justifyContent={"space-between"}
        flexDir={["column", "row"]}
        >
          <Flex columnGap="5%" width={["80%","45%"]}
          flexDir={['column-reverse', 'row']}
          >
            <Box w="100%" display={['none', 'block']}>
              <Box w={"10.38rem"} h={"2.5rem"}>
                <Image src="assets/icons/logoWhite.png" alt="" />
              </Box>
              <Text color="#A7AEA8" fontSize="1rem" mt="0.5rem">
                Peakpay ©2023. All Rights Reserved
              </Text>
            </Box>
            <Box>
              <Heading color="#FFF" fontSize="1.3125rem">
                Need Help?
              </Heading>

              <Text color="#A7AEA8" fontSize="21.33px">
                Support@peakpay.com
              </Text>
              <Text color="#A7AEA8" fontSize="21.33px">
                +234 809 546 2343
              </Text>
            </Box>
          </Flex>
          <Box>
            <Heading color="#FFFF" fontSize="1.3125rem">
              Follow us on:
            </Heading>
            <List display="flex" columnGap="1rem" mt="1rem">
               {
               SocialIcon.map((item, index) => (
                <ListItem key={index} cursor="pointer">
                <Center
                bg="#FFF"
                width="2rem"
                height="2rem"
                borderRadius="50%"
                >
                    <a href={item.link}>
                    <Text color="brand.darkBlue" fontSize="1.25rem">
                        {item.icon}
                    </Text>
                    </a>
                </Center>
            </ListItem>
               ))
                }
            </List>
          </Box>
          <Flex rowGap="24px" flexDirection={'column'} display={['flex', 'none']} justifyContent="space-between">
          <Text color="#FFFFFF">
            🇺🇸 🇳🇬 24b Bodija Olusanya Street, Lekki Phase 1, Lagos, Nigeria.
          </Text>

          <List display="flex" columnGap="2rem">
            <ListItem>
              <Text color="#FFF">Privacy Policy</Text>
            </ListItem>
            <ListItem color="#FFF">
              <Text>Terms of Use</Text>
            </ListItem>
          </List>
        </Flex>
        </Flex>

        <Box my="3rem" color="#FFF" borderTop="1px solid #FFF" w="full" />

        <Box w="100%" display={['block', 'none']}>
              <Box w={"10.38rem"} h={"2.5rem"}>
                <Image src="assets/icons/logoWhite.png" alt="" />
              </Box>
              <Text color="#A7AEA8" fontSize="1rem" mt="0.5rem">
                Peakpay ©2023. All Rights Reserved
              </Text>
            </Box>
        
      


        <Flex display={['none', 'flex']} justifyContent="space-between">
          <Text color="#FFFFFF">
            🇺🇸 🇳🇬 24b Bodija Olusanya Street, Lekki Phase 1, Lagos, Nigeria.
          </Text>

          <List display="flex" columnGap="2rem">
            <ListItem>
              <Text color="#FFF">Privacy Policy</Text>
            </ListItem>
            <ListItem color="#FFF">
              <Text>Terms of Use</Text>
            </ListItem>
          </List>
        </Flex>
      </Box>
    </MainContainer>
  );
};
