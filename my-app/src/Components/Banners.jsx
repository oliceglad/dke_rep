import { Box, Flex, Image, Spacer } from '@chakra-ui/react'

export default function Banners () {
    return <div>
        <Flex width="700px" alignItems="center" justifyContent="center">
        <Box color='white' p='4'>
        <Image 
        boxSize='300px'
        src='https://sun6-21.userapi.com/s/v1/ig2/-KljERGk0Og9yYaucyAIiWrg8KZmHofXenTtVF87IV7d2UrmevZ885_5Zjn_TSeGF-kIoGo7wvICtjvv9Tj7TxLt.jpg?size=1058x1058&quality=96&crop=2,14,1058,1058&ava=1' alt='БУ товары'/>
        </Box>
    <Spacer />

        <Box color='white' p='4'>

        <Image 
        boxSize='300px'
        src='https://sun6-21.userapi.com/s/v1/ig1/efMyGKMPQGtIPHGFd4IwhyJlNKJudevX1TaYBOTcUVr23AtJ4zufvEeSUhuDzyNF-1rlwov0.jpg?size=799x799&quality=96&crop=0,0,799,799&ava=1' alt='БУ товары'/>
        </Box>
        
        </Flex>

        

    </div>
}