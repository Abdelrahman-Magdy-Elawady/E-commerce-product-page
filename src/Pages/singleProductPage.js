import PlusIcon from "../given/images/icon-plus.svg";
import MinusIcon from "../given/images/icon-minus.svg";
import iconCart from "../given/images/icon-cart.svg";
import { useState } from "react";
import { addToCaret } from "../store/indexStore";
import CardSlider from "../components/cardSlider";

import { useLoaderData } from "react-router-dom";
import { useDispatch } from "react-redux";
export default function SingleProductPage() {
  const dispatch = useDispatch();
  //-----------------------------------------
  const disCount = 50; //50%
  const { product } = useLoaderData();
  const [count, setCount] = useState(0);
  const [showSlider, setShowSlider] = useState(false);
  //----------------------------------------
  const countPlus = () => {
    setCount(count + 1);
  };
  const countMinus = () => {
    setCount((prevCount) => {
      return prevCount > 0 ? prevCount - 1 : 0;
    });
  };
  const addProductToCaret = () => {
    dispatch(
      addToCaret({
        id: product.id,
        title: product.title,
        count,
        price: product.price * (disCount / 100),
        imgUrl: product.image,
      })
    );
    setCount(0);
  };
  //----------------------------------------------------------
  const smallImgs = new Array(4).fill(0).map((_, index) => (
    <div
      key={index}
      className="relative w-16 hover:cursor-pointer mobile:w-14"
      onClick={() => {
        setShowSlider(true);
      }}
    >
      <img src={product.image} alt="product-image" className="p-1 " />
      <div className="absolute inset-0 hover:bg-slate-400 opacity-50 rounded-lg"></div>
    </div>
  ));
  //-----------------------------------------------------------
  const sliderImgs = new Array(4).fill(product.image);

  return (
    <div className="mx-12 grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))]  gap-8 mobile:mx-auto mobile:grid-cols-1 mobile:gap-0">
      <div className="grid grid-rows-5 gap-4 p-8">
        <div className="row-span-4 flex justify-center  items-center">
          <img
            src={product.image}
            alt="product-image"
            className="h-96 mobile:h-80 "
          />
        </div>
        <div className="row-span-1 flex justify-center items-center gap-10 mobile:gap-4">
          {smallImgs}
        </div>
      </div>

      <div className="p-8 flex flex-col justify-evenly items-center gap-4">
        <div className="text-3xl font-bold">{product.title}</div>
        <div>{product.description}</div>
        <div className="w-full grid grid-rows-2 items-center">
          <div className="flex gap-4 items-center">
            <div className="text-xl font-bold ">
              $ {product.price * (disCount / 100)}
            </div>
            <div className="text-white bg-black px-2  rounded-lg text-sm ">
              {disCount} %
            </div>
          </div>
          <div className="line-through">{product.price}</div>
        </div>
        <div className="w-full grid grid-rows-1 grid-cols-2 ">
          <div className="flex items-center justify-center gap-x-8">
            <button onClick={countMinus}>
              <img src={MinusIcon} alt="-" />
            </button>
            <div>{count}</div>
            <button onClick={countPlus}>
              <img src={PlusIcon} alt="+" />
            </button>
          </div>
          <div className="flex justify-center items-center">
            <button
              className=" flex items-center justify-center gap-x-2 bg-orange-400 h-10 rounded-md font-bold px-8 hover:scale-105"
              onClick={addProductToCaret}
              disabled={!count}
            >
              <img src={iconCart} alt="cartIcon" className="scale-75" />
              <div className="text-sm mobile:hidden">Add to cart</div>
            </button>
          </div>
        </div>
      </div>
      {showSlider && (
        <CardSlider imgList={sliderImgs} setShowSlider={setShowSlider} />
      )}
    </div>
  );
}
