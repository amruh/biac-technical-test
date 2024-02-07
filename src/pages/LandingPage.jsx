import { Box, Center, Text, Image, ModalOverlay, Button, Modal, ModalHeader,ModalCloseButton, ModalBody, ModalFooter, useDisclosure, FormControl, FormLabel, Input, ModalContent } from '@chakra-ui/react'
import axios from 'axios';
import React, { useState } from "react"

export default function LandingPage() {
   const { isOpen, onOpen, onClose } = useDisclosure()
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("")

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  // const url = "https://anp.indofoodinternational.com:2864/bdrtny/iorudhtnhgi"
  // console.log(username)
  // console.log(password)

  // const handleLogin = async() =>{
  //   const login = await axios.post(url, {
  //     user_id: username,
  //     pswd: password
  //   })
  //   const data = login.data

  //   console.log(data);
  // }
  return (
    <>
    <Box color='white' height="100vh"   bg='red'  >
      <Box   >
        <Center>
        <Box boxSize='sm'>
          <Image src='https://www.indomie.com/uploads/product/indomie-mi-goreng-special_detail_094906814.png' alt='Dan Abramov' />
        </Box>
        <Text >Indomie, Flavor Favored by the World</Text>
        </Center>
      </Box>
     <Center>
      <Button onClick={onOpen}>Login</Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Login Account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Username</FormLabel>
              <Input ref={initialRef} placeholder='First name' onChange={(e) => setUsername(e.target.value)}/>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} >
              Login
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
     </Center>
    </Box>

    </>
  )
}
