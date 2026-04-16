import { Product, ProductListProps } from "@types/producttypes";
import ProductCard from "@components/ProductCard";
import { Fragment } from "react";

export default function ProductList({ products } : ProductListProps) {
  return (
    <div>
      {products?.map((product:Product) => (
        <Fragment key={product.id}>
        <ProductCard product={product}/>
        </Fragment>
      ))}
    </div>
  );
}
