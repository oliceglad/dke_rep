import { Box, Button, Image } from '@chakra-ui/react'
import React from 'react'


export const Card = ({name='none', rating='none', price='none', sale='none'}) => {
    return (
        <Box textAlign='left' marginRight={10}>
            <Image src='https://danvik.ru/upload/iblock/6f0/6f098ba529bdb39d1c63c33cc9ac96d6.jpg'/>
            <Box fontWeight='bold'>
                {name}
            </Box>
            <Box fontSize={12}>
                Рейтинг: {rating}
            </Box>
            <Box fontWeight='bold' color='#1890ff' fontSize={16} marginTop={20} marginBottom={20}>
                {price}
            </Box>

            <Button>
                Купить
            </Button>
            <Button>
                Избранное
            </Button>
        </Box>
    )
}