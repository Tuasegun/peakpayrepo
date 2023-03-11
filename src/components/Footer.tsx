import React from "react";
import {
  Box,
  Text,
  Image,
  Heading,
  Flex,
  List,
  ListItem,
} from "@chakra-ui/react";
import { MainContainer } from "../layout";
export const Footer = () => {
  return (
    <MainContainer bg="#00283D">
      <Box py="6.625rem">
        <Flex justifyContent={"space-between"}>
          <Flex columnGap="5%" width="45%">
            <Box w="100%">
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
            <Heading color="#FFF" fontSize="1.3125rem">
              Follow us on:
            </Heading>
          </Box>
        </Flex>
        <Box my="3rem" color="#FFF" borderTop="1px solid #FFF" w="full" />
        <Flex justifyContent="space-between">
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
