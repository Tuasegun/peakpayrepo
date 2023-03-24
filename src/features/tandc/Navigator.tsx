import React from 'react'
import {Box, List, ListItem, ListIcon, Link} from '@chakra-ui/react'
import {navContent} from '../../constant'
import {NavLink} from 'react-router-dom'
import {RxDot} from 'react-icons/rx'
export const Navigator = () => {
  return (
    <Box
    background={"brand.orange.100"}
    padding={"1.5rem 1.5rem"}
    >
        <List>
          {
            navContent.map((item, index) => (
              <>
              <ListItem color="#000" p="12px" borderBottom="1px solid #E2E4E2;" key={index}>
                <ListIcon as={RxDot} size="5px" color="#000" />
                <Link 
                href={item.link}>{item.title}</Link>
              </ListItem>
               {
                item.sublink?.map((subitem, index) => (
                  <ListItem color="#000" p=".75rem 1.5625rem" borderBottom="1px solid #E2E4E2;" key={index}>
                    <ListIcon as={RxDot} size="5px" color="#000" />
                    <Link href={subitem.link}>{subitem.title}</Link>
                  </ListItem>
                ))
              }
             </>   
            ))
          }
        </List>
    </Box>
  )
}
