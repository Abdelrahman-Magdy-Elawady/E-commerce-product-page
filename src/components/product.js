import { Link } from "react-router-dom";
export default function Product({ item }) {
  return (
    <Link to={`/products/${item.id}`}>
      <div className="w-96 h-[500px] flex flex-col justify-evenly items-center p-4 rounded-lg  hover:shadow-3xl hover:cursor-pointer  group overflow-hidden">
        <img
          src={item.image}
          alt="img-product"
          className="w-60 group-hover:scale-110"
        />
        <div>{item.title}</div>
      </div>
    </Link>
  );
}
