import { Box, Button, InputGroup, InputRightElement, Spacer } from '@chakra-ui/react'

export default function Footer () {
    return  <Box w='100%' color='white' display="flex" flexWrap='wrap' alignItems="center" justifyContent="flex-end"     flexDirection="column">
        <Spacer/>
    <Box bg='#40a9ff' display='flex' justifyContent='space-between' padding={10} w="100%">
        <Box>
            Москва
        </Box>
        <Box>
            +7 939 700 87 32
        </Box>
    </Box>
    <Box bg='#0050b3' display='flex' justifyContent='flex-start' alignItems='center' padding={10} gap={20} w="100%">
        
        <Box display='flex'>
       
        <Box >
                Каталог
            </Box>
        
        </Box>
        
        <Box>
           
            <Box>
                Избранное
            </Box>
        </Box>
        <Box>
           
            <Box>
                Сравнение
            </Box>
        </Box>
        <Box>
            
            <Box>
                Корзина
            </Box>
        </Box>
        <Box>
           
            <Box>
                Войти
            </Box>
        </Box>
    </Box>
</Box>
}