import { Box, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Box w='100%' display='flex' boxShadow='md' p='5' alignItems="center" justifyContent="space-between" item >
      <Link to='/' >Landing Page</Link>
      <Button onClick={() => console.log('logout')}>Logout</Button>
    </Box>
  )
}
