import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";  
import ProductItem from "./ProductItem";


const ReletedProducts = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);
  const [releted, setReleteds] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let productsCopy = products.slice();

      productsCopy = productsCopy.filter((item) => category === item.category);
      productsCopy = productsCopy.filter((item) => subCategory === item.subCategory
      );

      setReleteds(productsCopy.slice(0, 5));
    }
  }, [products]);

  return (
    <div className=" my-24 ">
      <div className="text-center text-3xl py-2">
        <Title text1={"Releted"} text2={"Products"} />
      </div>

      <div className="">
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5">
          {releted.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReletedProducts;
