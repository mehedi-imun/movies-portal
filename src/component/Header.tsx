/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useState } from "react";
import moon from "../assets/icons/moon.svg";
import sun from "../assets/icons/sun.svg";
import ring from "../assets/ring.svg";
import shopping from "../assets/shopping-cart.svg";
import { MovieContext, ThemeContext } from "../context";
import Cart from "./cine/Cart";
const Header = () => {
  const { cartData }: any = useContext(MovieContext);
  const { darkMode, setDarkMode }: any = useContext(ThemeContext);
  const [showCart, setShowCart] = useState(false);
  const handleShowCart = () => {
    setShowCart(true);
  };
  return (
    <div>
      <header>
        {showCart && <Cart onClose={() => setShowCart(false)}></Cart>}
        <nav className="container flex items-center justify-between space-x-10 py-6">
          <a href="index.html">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="text-primary"
            >
              <path d="m10 7 5 3-5 3Z" />
              <rect width="20" height="14" x="2" y="3" rx="2" />
              <path d="M12 17v4" />
              <path d="M8 21h8" />
            </svg>
          </a>

          <ul className="flex items-center space-x-5">
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img src={ring} width="24" height="24" alt="" />
              </a>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
                onClick={() => setDarkMode(!darkMode)}
              >
                <img
                  src={darkMode ? sun : moon}
                  width="24"
                  height="24"
                  alt=""
                />
              </a>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
                onClick={handleShowCart}
              >
                <img src={shopping} width="24" height="24" alt="" />
                {cartData?.length > 0 && (
                  <span className="rounded-full absolute top-[-12px] left-[28px] bg-primary text-white text-center p-[2px] size-[30px]">
                    {cartData?.length}
                  </span>
                )}
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
