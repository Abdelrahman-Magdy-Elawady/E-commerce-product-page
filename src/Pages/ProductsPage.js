import Product from "../components/product";
import { useFetchProductsQuery } from "../store/indexStore";
import { ImSpinner11 } from "react-icons/im";

export default function ProductsPage() {
  const { data, error, isFetching } = useFetchProductsQuery();

  let content = null;
  if (isFetching) {
    content = <ImSpinner11 className="text-9xl animate-spin " />;
  } else if (error) {
    content = <div>error</div>;
  } else {
    content = data.map((item) => {
      return <Product key={item.id} item={item} />;
    });
  }

  return (
    <div className="flex justify-evenly items-center flex-wrap gap-4 my-10">
      {content}
    </div>
  );
}
