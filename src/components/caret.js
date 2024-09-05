import { useDispatch, useSelector } from "react-redux";
import { FaTrashAlt } from "react-icons/fa";
import { removeFromCaret } from "../store/indexStore";
import { resetCaret } from "../store/indexStore";

export default function Caret() {
  const caret = useSelector((state) => state.caret);
  const dispatch = useDispatch();
  const removeItem = (item) => {
    dispatch(removeFromCaret(item));
  };
  const cleanCartHandler = () => {
    dispatch(resetCaret());
  };

  const products = caret.map((product) => {
    return (
      <div
        key={product.id}
        className="flex justify-between items-center gap-4 p-2  w-full "
      >
        <img src={product.imgUrl} alt="productImg" className="w-12" />
        <div>
          <div>{product.title}</div>
          <div>
            ${product.price} x {product.count}
            <span className="font-bold">
              {" "}
              ${(product.count * product.price).toFixed(2)}
            </span>
          </div>
        </div>
        <div
          onClick={() => removeItem(product)}
          className="hover:cursor-pointer"
        >
          <FaTrashAlt />
        </div>
      </div>
    );
  });

  return (
    <div className=" w-72 py-4 px-4 rounded-xl shadow-2xl min-h-56 flex flex-col justify-center items-center gap-4 bg-white mobile:w-full ">
      <div className="p-2 font-bold text-xl self-start">Cart</div>
      {caret.length > 0 ? (
        <div className="flex flex-col justify-center items-center gap-4  divide-y divide-slate-200">
          {products}
        </div>
      ) : (
        <div className="flex-1 flex justify-center items-center">
          Your cart is empty.
        </div>
      )}
      {caret.length > 0 && (
        <button
          className="bg-orange-400 h-10 rounded-md font-bold  hover:scale-105 px-4"
          onClick={cleanCartHandler}
        >
          Clean Cart
        </button>
      )}
    </div>
  );
}
