import { useCallback, useState } from "react";
import iconCart from "../given/images/icon-cart.svg";
import imgAvatar from "../given/images/image-avatar.png";
import Logo from "../given/images/logo.svg";
import Caret from "./caret";
import { Link } from "react-router-dom";
import closeIcon from "../given/images/icon-close.svg";
import menuIcon from "../given/images/icon-menu.svg";
import { useRef, useEffect } from "react";
export default function NavBar() {
  const [showCart, setShowCart] = useState(false);
  const [openMenu, setOpenMenu] = useState("hidden");
  const elementRef = useRef([]);
  //-------------------------------------------------
  const toggleCart = useCallback(() => {
    setShowCart((showCart) => !showCart);
  }, []);
  //---------------------------------------------
  useEffect(() => {
    const handler = (e) => {
      if (elementRef.current[2] === e.target) {
        toggleCart();
      } else if (!elementRef.current[1]?.contains(e.target)) {
        setShowCart(false);
      }
      if (!elementRef.current[0].contains(e.target)) {
        setOpenMenu("hidden");
      }
    };
    document.addEventListener("click", handler, true);
    return () => document.removeEventListener("click", handler);
  }, [toggleCart]);
  //-------------------------------------------------------
  const links = [
    {
      label: "Collections",
      // path: "/",
    },
    {
      label: "Men",
    },
    {
      label: "Women",
    },
    {
      label: "About",
    },
    {
      label: "Contact",
    },
  ];
  //-----------------------------------------------
  const navLinks = links.map((link) => {
    return (
      <div
        key={link.label}
        className="hover:border-b-4 border-b-orange-600 flex items-center tablet:border-none"
      >
        {link.label}
      </div>
    );
  });
  //-----------------------------------------------

  return (
    <div className="fixed w-full z-50 bg-white shadow-xl">
      <div className="flex justify-around items-center  py-4  relative ">
        <div>
          <img
            src={menuIcon}
            alt="menu"
            className="hidden tablet:block "
            onClick={() => {
              setOpenMenu("");
            }}
          />
        </div>
        <Link to={`/`}>
          <img src={Logo} alt="logo" />
        </Link>

        <div
          ref={(el) => (elementRef.current[0] = el)}
          className={`bg-white relative  flex justify-between w-96  self-stretch  tablet:-order-1 tablet:absolute tablet:top-0 tablet:flex-col tablet:left-0  tablet:h-screen tablet:justify-start tablet:gap-4 tablet:pt-16 tablet:pl-12 tablet:font-bold tablet:w-60  tablet:${openMenu} `}
        >
          <div>
            <img
              src={closeIcon}
              alt="x"
              className="hidden tablet:block tablet:absolute tablet:top-6 tablet:left-6"
              onClick={() => {
                setOpenMenu("hidden");
              }}
            />
          </div>
          {navLinks}
        </div>

        <div className="w-16 tablet:hidden">{/*divider*/}</div>
        <div className="flex justify-between items-center gap-12">
          <img
            src={iconCart}
            alt="iconCaret"
            className="hover:cursor-pointer"
            ref={(el) => (elementRef.current[2] = el)}
          />
          <img
            src={imgAvatar}
            alt="imgAvatar"
            className="aspect-square w-14 
          "
          />
        </div>
        {showCart && (
          <div
            className="absolute top-[105%] right-[12%] z-50  mobile:w-full mobile:right-0 mobile:px-8"
            ref={(el) => (elementRef.current[1] = el)}
          >
            <Caret />
          </div>
        )}
      </div>
    </div>
  );
}
