"use client";
import { useEffect, useState } from "react";
import ProductList from "@components/ProductList";
import SearchInput from "@components/SearchInput";
import FormTest from "@components/FormTest";

const Search = () => {
  const controller = new AbortController();
  const [data, setData] = useState();
  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products", {
      signal: controller.signal,
    })
      .then((res) => res.json())
      .then((datas) => {
        setData(datas);
        console.log(datas);
      })
      .catch((e) => {
        console.error(e);
      });
    return () => {
      controller.abort();
    };
  }, []);
  return (
    <>
      <FormTest />
      hr
      <div className="row">
        <div className="col-12">
          <SearchInput />
        </div>
        <div className="col-md-4">
          <ProductList products={data} />
        </div>
        <div className="col-md-8"></div>
      </div>
      {/* {data && JSON.stringify(data)} */}
    </>
  );
};
export default Search;
