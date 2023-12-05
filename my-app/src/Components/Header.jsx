import React from 'react'
import { Box, Button, InputGroup, InputRightElement } from '@chakra-ui/react'
import { SearchIcon, ChatIcon } from '@chakra-ui/icons'
import { Input } from '@chakra-ui/react'
import { CiUser } from "react-icons/ci"
import { IoBagHandleOutline } from "react-icons/io5";
import { FaCodeCompare } from "react-icons/fa6"
import { CiHeart } from "react-icons/ci";


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
            <Box bg='#0050b3' display='flex' justifyContent='space-between' alignItems='center' padding={10}>
                <Box>
                    Logo
                </Box>
                <Box display='flex'>
                    <Button>
                        Каталог
                    </Button>
                    <InputGroup>
                        <Input width='auto' borderRadius={10} padding={5} />
                        <InputRightElement>
                            <SearchIcon color='black' marginTop={5} />
                        </InputRightElement>
                    </InputGroup>
                </Box>
                <Box>
                    <CiHeart />
                    <Box>
                        Избранное
                    </Box>
                </Box>
                <Box>
                    <FaCodeCompare />
                    <Box>
                        Сравнение
                    </Box>
                </Box>
                <Box>
                    <IoBagHandleOutline />
                    <Box>
                        Корзина
                    </Box>
                </Box>
                <Box>
                    <CiUser />
                    <Box>
                        Войти
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}