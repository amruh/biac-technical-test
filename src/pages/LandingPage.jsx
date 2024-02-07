import { Flex, Spacer, Center, Text, Square,Box, Image } from '@chakra-ui/react'
import React from "react"

export default function LandingPage() {
  //  const { isOpen, onOpen, onClose } = useDisclosure()

  // const initialRef = React.useRef(null)
  // const finalRef = React.useRef(null)
  return (
    <>
    <Flex color='white' height="100vh" >
      <Box flex='1' height="100%" bg='tomato' clas>
        <Center>
        <Box boxSize='sm'>
          <Image src='https://www.indomie.com/uploads/product/indomie-mi-goreng-special_detail_094906814.png' alt='Dan Abramov' />
        </Box>
        <Text>Indomie, Flavor Favored by the World</Text>
        </Center>
      </Box>
    </Flex>

    </>
  )
}
