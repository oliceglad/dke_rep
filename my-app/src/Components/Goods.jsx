import React from 'react'
import { Card } from './UI/card'
import { Box } from '@chakra-ui/react'
import { data } from '../data'


export const Goods = () => {
    return (
        <Box padding={10} display='flex' flexWrap='wrap'>
            {data.map((el) => <Card name={el.name} key={el.id} price={el.price} rating={el.rating}/>)}
        </Box>
    )
}