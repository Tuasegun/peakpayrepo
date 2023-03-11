import React from 'react'
import { Box, Container } from '@chakra-ui/react'

interface MainContainerProps extends React.PropsWithChildren{
    bg: string;
}

export const MainContainer = ({bg,children}: MainContainerProps) => {
  return (
    <Box
    bg={bg|| "#FFFFFFFF" }
    position="relative"
    >
      <Container
        px={['5%']}
        maxW={['100%']}
      >
      {children}
      </Container>
    
    </Box>
  )
}
