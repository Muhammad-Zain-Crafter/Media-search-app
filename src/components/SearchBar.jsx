import { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/features/searchSlice";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(setQuery(input));
    setInput("");
  };

  return (
    <form
      onSubmit={submitHandler}
      className="
        flex flex-col
        md:flex-row
        items-stretch sm:items-center
        justify-center
        gap-3
        px-4 sm:px-14
        py-4
      "
    >
      <input
        type="text"
        required
        placeholder="Search anything"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="
          border-2
          px-4 py-2
          rounded
          w-full
          outline-none
        "
      />

      <button
        type="submit"
        className="
          border-2
          px-4 py-2
          rounded
          cursor-pointer
          active:scale-90
          active:bg-indigo-600
          w-full sm:w-auto
        "
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
