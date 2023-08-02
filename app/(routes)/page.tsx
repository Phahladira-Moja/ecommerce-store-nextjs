import React from "react";

import Billboard from "@/components/Billboard";
import Container from "@/components/ui/container";
import getBillboards from "@/actions/getBillboards";
import getProducts from "@/actions/getProducts";
import ProductsList from "@/components/ui/ProductsList";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboards("149b60ad-4cd1-45e5-a677-87874c715c0c");

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductsList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
