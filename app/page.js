import CardsContainer from "./_components/CardsContainer";
import { getProducts } from "./_lib/data-services";

export default async function Home() {
  const products = await getProducts()
  return (
    <>
      <CardsContainer products={products}></CardsContainer>
    </>
  );
}
