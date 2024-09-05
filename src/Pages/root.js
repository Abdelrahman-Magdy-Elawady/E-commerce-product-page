import NavBar from "../components/nav";
import { Outlet } from "react-router-dom";
export default function Root() {
  return (
    <div className=" min-h-screen flex flex-col">
      <NavBar />
      {
        <div className="flex-1 flex justify-center items-center  mt-[88px]">
          <Outlet />
        </div>
      }
    </div>
  );
}
