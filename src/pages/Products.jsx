import { LuArrowDownFromLine, LuArrowUpFromLine } from "react-icons/lu";
import NavBar from "../sharedComponent/NavBar";
import SideBar from "../sharedComponent/SideBar/SideBar";
import { IoIosSearch } from "react-icons/io";
import ProductCard from "../components/ProductCard";

const Products = () => {
  return (
    <div>
      <SideBar />
      <NavBar />
      <div className="lg:flex lg:justify-between lg:items-center my-4 ml-2 mr-2 lg:ml-[2rem] xl:ml-[21rem]">
        <h3 className="inter font-bold">Products</h3>
        <section className="flex justify-center">
          <button className="btn flex items-center gap-1 mr-2">
            <LuArrowUpFromLine /> Import
          </button>
          <button className="btn flex items-center gap-1 mr-2">
            <LuArrowDownFromLine /> Export
          </button>
          <button className="btn btn-active btn-primary">Add Products</button>
        </section>
      </div>

      <div className="dark:bg-[#121212] p-4 relative h-20 lg:ml-[2rem] xl:ml-[21rem]">
        <label
          className="absolute top-1 z-20 bg-[#121212] ml-2 px-2"
          htmlFor="search customer"
        >
          Search product
        </label>
        <IoIosSearch className="absolute z-30 top-7 left-5 w-5 h-5" />
        <input
          type="text"
          name=""
          className="absolute z-10 border rounded py-2 pl-6 pr-4 w-72"
          id=""
        />
      </div>
      <div className="mt-4 xl:ml-[21rem]">
        <ProductCard />
      </div>
    </div>
  );
};

export default Products;
