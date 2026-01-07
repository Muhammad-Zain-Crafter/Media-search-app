import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <div className="w-full p-4 bg-gray-700 flex justify-between items-center">
        <h1 className="text-xl font-bold md:text-2xl">Media Search</h1>
        <div className="flex gap-2 md:gap-5 ">
          <Link
            className="font-bold px-2 py-1 rounded bg-white text-indigo-600 active:scale-95"
            to="/"
          >
            Search
          </Link>
          <Link
            className="font-bold px-2 py-1 rounded bg-white text-indigo-600 active:scale-95"
            to="/collection"
          >
            Collection
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
