import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import { Grid, Box } from "@chakra-ui/react";
// import { useSelector, useDispatch } from "react-redux";
// import { increment, decrement } from "../redux/slices/cartSlice";

const DUMMYDATA = [
  {
    id: "1",
    name: "Indomie 1",
    quantity: 100,
  },
  {
    id: "2",
    name: "Indomie 2",
    quantity: 100,
  },
  {
    id: "3",
    name: "Indomie 3",
    quantity: 100,
  },
  {
    id: "4",
    name: "Indomie 4",
    quantity: 100,
  },
];

export default function HomePage() {
  // const count = useSelector((state) => state.cart)
  // const dispatch = useDispatch()
  // console.log(count);
  return (
    <>
      <Header />
      <Box maxW="960px" mx="auto" pt={10}>
        <Grid
          h="200px"
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(3, 1fr)"
          gap={4}
        >
          {DUMMYDATA.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              quantity={product.quantity}
            />
          ))}
        </Grid>
      </Box>
    </>
  );
}
