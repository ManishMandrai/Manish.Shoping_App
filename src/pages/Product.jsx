import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "/src/context/ShopContext";
import { assets } from "../assets/assets";
import ReletedProducts from "../components/ReletedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products, currency,addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");
  const [size, setSize] = useState(" ");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);

        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 mt-20 opacity-100">
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        <div className=" flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className="w-[-24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={image} alt="" />
          </div>
        </div>

        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex item-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
            <p className="pl-2 text-xs"> (122)</p>
          </div>

          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:4/5">{productData.description}</p>

          <div className="flex flex-col gap-4 my-8">
            <p> select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4 bg-gray-100 ${
                    item === size ? "border-green-500" : ""
                  } `}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <button  onClick={() => addToCart(productData._id,size)} className="bg-black text-white px-8 py-3 text-sm  active:bg-gray-700">
            Add To Cart
          </button>
          <hr className="mt-5 sm:w-4/5" />
          <div className=" text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original Products</p>
            <p>Easy Return And Exchange</p>
            <p>Cash On Delivery</p>
          </div>
        </div>
      </div>

      <div className="mt-20 ">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <b className="border px-5 py-3 text-sm">Reviews</b>
        </div>
        <div className="flex flex-col gap-4 px-6 py-6 text-sm text-gray-500">
          <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure eaque corporis labore, alias laboriosam quas atque accusantium rerum hic tempora! Mollitia quia, ab ipsam facilis voluptatem quis eos reiciendis repellendus, voluptas ea inventore et cum unde ullam aperiam illo recusandae culpa dicta dignissimos. Qui maiores explicabo at fugiat dignissimos voluptatem!
          </p>
          <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure eaque corporis labore, alias laboriosam quas atque accusantium rerum hic tempora! Mollitia quia, ab ipsam facilis voluptatem quis eos reiciendis repellendus, voluptas ea inventore et cum unde ullam aperiam illo recusandae culpa dicta dignissimos. Qui maiores explicabo at fugiat dignissimos voluptatem!
          </p>
        </div>
      </div>

      <ReletedProducts category={productData.category} subCategory={productData.subCategory}/>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
