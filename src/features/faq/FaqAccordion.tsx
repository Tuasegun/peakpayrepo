import React from "react";
import {
  Box,
  AccordionIcon,
  AccordionButton,
  AccordionPanel,
  Text,
  Heading,
    AccordionItem,
} from "@chakra-ui/react";
import { FaqContentInterface } from "../../constant";
export const FaqAccordion = ({questionTitle, questionAnswer}: FaqContentInterface) => {
  return (
    <>
     <AccordionItem
     py="2.5rem"
     >
          <AccordionButton background="none">
            <Box flex="1" textAlign="left">
              <Heading fontSize={["1rem","1.5rem"]} lineHeight={["1.5","2rem"]}>
            {questionTitle}
              </Heading>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <Text
            lineHeight={["1.5rem","1.5rem"]}
            fontSize={["0.8rem","1rem"]}
            >
           {questionAnswer}
            </Text>
          </AccordionPanel>
    </AccordionItem>
      </>
  );
};
