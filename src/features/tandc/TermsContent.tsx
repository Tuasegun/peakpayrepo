import React from "react";
import { Box, Heading, Text, List, ListItem, UnorderedList } from "@chakra-ui/react";
import {
  backgroundContent,
  infoWeCollect,
  StorageInfo,
  SecurityInfo,
  InfoSharing,
  Cookies,
  Permission,
  PrivacyChanges,
  ContactUs
} from "../../constant";
import { Hero } from "./Hero";

export const TermsContent = () => {
  return (
    <Box
    >
      {/* background */}
      <Box
      mb="2rem"
      >
      <Heading
       fontSize="1.7769rem"
       fontWeight="700"
       lineHeight={"2rem"}
       marginBottom="2rem"
       id={backgroundContent.id}
      >{backgroundContent.title}</Heading>
      <Text
       fontSize={"1rem"}
       fontWeight="450"
       lineHeight={"1.5rem"}
       mb="1rem"
      >{backgroundContent.mainContent}</Text>
      <UnorderedList>
        {backgroundContent.listContent.map((item, index) => (

          <ListItem key={index}>{item}</ListItem>
        ))}
      </UnorderedList>
      <Text>{backgroundContent.summary}</Text>
      </Box>
      <List>
        {/* information we collect */}
        <ListItem
          mb="2rem"
        >
          <Heading
          fontSize="1.7769rem"
          fontWeight="700"
          lineHeight={"2rem"}
          marginBottom="2rem"
          id={infoWeCollect.id}
          >{infoWeCollect.title}</Heading>
          <Text
          fontSize={"1rem"}
          fontWeight="450"
          lineHeight={"1.5rem"}
          mb="1rem"
          >{infoWeCollect.mainContent}</Text>
          <List>
            {infoWeCollect.listContent.map((item, index) => (
              <ListItem
              fontSize={"1rem"}
              fontWeight="450"
              lineHeight={"1.5rem"}
              key={index}
              mb="1rem"
              >
                <Text
                >
                  <Text as="span"
                  fontWeight={"700"}
                  >{item.numbering}{" "}</Text>
                  {item.content}
                </Text>
                {item?.list?.map((list, index) => (
                    <ListItem 
                    fontSize={"1rem"}
                    fontWeight="450"
                    lineHeight={"1.5rem"}
                    key={index}>
                      <Text>{list}</Text>
                    </ListItem>
                  ))}
              </ListItem>
            ))}
          </List>
        </ListItem>
        <ListItem
        mb="2rem"
        >
          {/* storage */}
          <Heading
           fontSize="1.7769rem"
           fontWeight="700"
           lineHeight={"2rem"}
           marginBottom="2rem"
           id={StorageInfo.id}
          >{StorageInfo.title}</Heading>
          <List>
            {StorageInfo.listContent.map((item, index) => (
              <ListItem 
              fontSize={"1rem"}
              fontWeight="450"
              lineHeight={"1.5rem"}
              key={index}
              mb="1rem"
              id={item.id}
              >
                <Text
                  fontWeight={"700"}
                >
                  <Text as="span"
                  >{item.numbering}{" "}</Text>
                  {item.title}
                </Text>
                <Text>{item.content}</Text>
                <List>
                  {item.list?.map((list, index) => (
                    <ListItem  fontSize={"1rem"}
                    fontWeight="450"
                    lineHeight={"1.5rem"}
                    key={index}
                    mb="1rem">
                      <Text>{list}</Text>
                    </ListItem>
                  ))}
                </List>
              </ListItem>
            ))}
          </List>
        </ListItem>

        {/* securityinfo */}
        <ListItem
        mb="2rem"
        >
          <Heading
           fontSize="1.7769rem"
           fontWeight="700"
           lineHeight={"2rem"}
           marginBottom="2rem"
            id={SecurityInfo.id}
          >{SecurityInfo.title}</Heading>
          <Text
          mb="1rem"
          >{SecurityInfo.mainContent}</Text>
          <List
         
          >
            {SecurityInfo.content.map((item, index) => (
              <ListItem
              fontSize={"1rem"}
              fontWeight="450"
              lineHeight={"1.5rem"}
              mb="1rem"
              key={index}>
                <Text>{item}</Text>
              </ListItem>
            ))}
          </List>
        </ListItem>

        <ListItem
        mb="2rem"
        >
          {/* informationsharing */}
          <Heading
           fontSize="1.7769rem"
           fontWeight="700"
           lineHeight={"2rem"}
           marginBottom="2rem"
           id={InfoSharing.id}
          >{InfoSharing.title}</Heading>
          <Text
             fontSize={"1rem"}
             fontWeight="450"
             lineHeight={"1.5rem"}
             mb="1rem"
          >{InfoSharing.mainContent}</Text>
        </ListItem>

        <ListItem
       
        >
          {/* cookies */}
          <Heading
           fontSize="1.7769rem"
           fontWeight="700"
           lineHeight={"2rem"}
           marginBottom="2rem"
            id={Cookies.id}
          >{Cookies.title}</Heading>
          <List>
            {Cookies.listContent.map((item, index) => (
              <ListItem  id={item.id}  key={index}>
                <Text
                fontSize={"1rem"}
                fontWeight="700"
                lineHeight={"1.5rem"} mb="1rem"
                >
                  <Text as="span">{item.numbering}{" "}</Text>
                  {item.title}
                </Text>
                <Text
                fontSize={"1rem"}
                fontWeight="450"
                lineHeight={"1.5rem"} mb="1rem"
                >{item.content}</Text>
              </ListItem>
            ))}
          </List>
        </ListItem>
        
        <ListItem
        mb="2rem"
        >
            {/* privacychanges */}
            <Heading
             fontSize="1.7769rem"
             fontWeight="700"
             lineHeight={"2rem"}
             marginBottom="2rem"
             id={PrivacyChanges.id}
            >{PrivacyChanges.title}</Heading>
            {
                PrivacyChanges.listContent.map((item, index) => (
                    <Text key={index}>
                        {item}
                    </Text>
                
                ))
            }
        </ListItem>

        <ListItem
        mb="2rem"
        >
            {/* contactus */}
            <Heading
             fontSize="1.7769rem"
             fontWeight="700"
             lineHeight={"2rem"}
             marginBottom="2rem"
            >{ContactUs.title}</Heading>
            {
                ContactUs.listContent.map((item, index) => (
                   <Text  fontSize={"1rem"}
                   fontWeight="450"
                   lineHeight={"1.5rem"} mb="1rem" key={index}>
                          {item}
                    </Text> 
                ))
            }
        </ListItem>



        <ListItem
        mb="2rem"
        >
            {/* permission */}
            <Heading
             fontSize="1.7769rem"
             fontWeight="700"
             lineHeight={"2rem"}
             marginBottom="1.5rem"
            >{Permission.title}</Heading>
            <Text fontSize={"1rem"}
              fontWeight="450"
              lineHeight={"1.5rem"} mb="1rem">{Permission.mainContent}</Text>
            <List>
                {Permission.list.map((item, index) => (
                    <ListItem  fontSize={"1rem"}
                    fontWeight="450"
                    lineHeight={"1.5rem"} mb="1rem" key={index}>
                        <Text>
                            <Text as="span">
                            {item.title}
                            </Text>
                            {item.content}
                            </Text>
                    </ListItem>
                ))}
            </List>
        </ListItem>
      </List>
    </Box>
  );
};
