import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { Fade } from 'react-awesome-reveal'

const Header = () => {
    return (
        <Box w={'100%'} h={'70px'} bg={'#40a35c'} color={'white'} p={2} display={'flex'} justifyContent={'space-around'} alignItems={'center'}>
            <Text fontSize={{ base: '30px', md: '40px' }}>
                <Fade direction='down' cascade duration={300}>
                    React Trello Clone
                </Fade>
            </Text>
        </Box>
    )
}

export default Header
