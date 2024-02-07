import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";

export default function ProductCard({name}) {
  return (
    <Card maxW="sm" shadow='md'>
      <CardBody>
        <Image
          src="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//93/MTA-2583228/indomie_indomie-goreng-mie-instan--85g--_full02.jpg"
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{name}</Heading>
          {/* <Text>
            This sofa is perfect for modern tropical spaces, baroque inspired
            spaces, earthy toned spaces and for people who love a chic design
            with a sprinkle of vintage design.
          </Text> */}
          <Text color="blue.600" fontSize="2xl">
            Rp. 3000
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="ghost" colorScheme="blue">
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}
