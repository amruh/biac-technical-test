import Child from "./components/Child";
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <Child />
    </ChakraProvider>
  );
}

export default App;
