import React from "react";
import {
  Box,
  Text,
  Image,
  Heading,
  Flex,
  List,
  ListItem,
  Center,
} from "@chakra-ui/react";
import { MainContainer } from "../layout";
import {Link } from 'react-router-dom'
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
                <Image src="/assets/icons/logoWhite.png" alt="" />
              </Box>
              <Text color="#A7AEA8" fontSize="1rem" mt="0.5rem">
                Peakpay ©2023. All Rights Reserved
              </Text>
            </Box>
            <Box
            display="flex"
            flexDir="column"
            width="100%"
            >
              <Heading color="#FFF" fontSize="1.3125rem">
                Need Help?
              </Heading>

              <Text as='a' href="mail:Hello@peakpay.ng" color="#A7AEA8" fontSize="21.33px">
              Hello@peakpay.ng 
              </Text>

              <Text color="#A7AEA8" as="a" href="tel: +2347066563422" fontSize="21.33px">
              +234 706 656 3422
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
            🇺🇸 🇳🇬 144A, Association Road, Dolphin, Ikoyi, Lagos..
          </Text>

          <List display="flex" columnGap="2rem">
            <ListItem>
              <Link to="/faq">
              <Text color="#FFF">FAQ</Text>
              </Link>
            </ListItem>
            <ListItem color="#FFF">
              <Link to="/terms">
              <Text>Terms of Use</Text>
              </Link>
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
            🇺🇸 🇳🇬 144A, Association Road, Dolphin, Ikoyi, Lagos..
          </Text>

          <List display="flex" columnGap="2rem">
            <ListItem>
            <Link to="/faq">
              <Text color="#FFF">FAQ</Text>
              </Link>
            </ListItem>
            <ListItem color="#FFF">
            <Link to="/terms">
              <Text    color="#FFF">Terms of Use</Text>
              </Link>
            </ListItem>
          </List>
        </Flex>
      </Box>
    </MainContainer>
  );
};
