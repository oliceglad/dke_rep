import React from 'react'
import { Box, Button, InputGroup, InputRightElement } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { Input } from '@chakra-ui/react'


export const Header = () => {
    return (
        <Box w='100%' color='white'>
            <Box bg='#40a9ff' display='flex' justifyContent='space-between' padding={10}>
                <Box>
                    Москва
                </Box>
                <Box>
                    +7 939 700 87 32
                </Box>
            </Box>
            <Box bg='#0050b3' display='flex' justifyContent='space-between' padding={10}>
                <Box>
                    Logo
                </Box>
                <Box>
                    <Button>
                        Каталог
                    </Button>
                    <InputGroup display='flex'>
                        <Input width='auto' borderRadius={10} padding={5} marginLeft={10} />
                        <InputRightElement>
                            <SearchIcon color='black' marginTop={5}/>
                        </InputRightElement>
                    </InputGroup>
                </Box>
                <Box>
                    Избранное
                </Box>
                <Box>
                    Сравнение
                </Box>
                <Box>
                    Корзина
                </Box>
                <Box>
                    Войти
                </Box>
            </Box>
        </Box>
    )
}