import ReactDOM from "react-dom";
import nextIcon from "../given/images/icon-next.svg";
import backIcon from "../given/images/icon-previous.svg";
import { useEffect, useState } from "react";
export default function CardSlider({ imgList, setShowSlider }) {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);
  //------------------------------------------------
  const imgSlider = imgList.map((url, index) => (
    <img
      src={url}
      alt="img"
      key={index}
      className="w-full flex-shrink-0  transition ease-out duration-40 p-8"
      style={{ transform: `translateX(${-currentIndex * 100}%)` }}
    />
  ));
  //-----------------------------------------------

  const toLeft = () => {
    setCurrentIndex((currentIndex + 1) % imgList.length);
  };
  const toRigth = () => {
    setCurrentIndex((currentIndex - 1 + imgList.length) % imgList.length);
  };

  //------------------------------------------------
  return ReactDOM.createPortal(
    <div>
      <div
        className="fixed inset-0 bg-gray-500 z-50 opacity-80"
        onClick={() => {
          setShowSlider(false);
        }}
      />
      <div className="fixed  z-50 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2  bg-white w-1/3 h-1/2 rounded-2xl mobile:w-4/5">
        <div className="  w-full h-full flex overflow-hidden">{imgSlider}</div>
        <div
          className="absolute aspect-square w-12 rounded-full bg-white  flex justify-center items-center top-1/2 -translate-y-1/2  -translate-x-1/2 hover:cursor-pointer"
          onClick={() => {
            toLeft();
          }}
        >
          <img src={backIcon} alt="<-" />
        </div>
        <div
          className="absolute aspect-square w-12 rounded-full bg-white  flex justify-center items-center top-1/2 left-full -translate-y-1/2  -translate-x-1/2  hover:cursor-pointer "
          onClick={() => {
            toRigth();
          }}
        >
          <img src={nextIcon} alt="-->" />
        </div>
      </div>
    </div>,
    document.querySelector(".card-slider")
  );
}
