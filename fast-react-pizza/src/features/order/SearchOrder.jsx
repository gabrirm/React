import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input className="rounded-full text-center px-2 py-1 bg-yellow-1 text-xs sm:text-sm placeholder:text-stone-900 w-30 sm:w-64 sm:focus:w-72 transition-all duration-300 focus:outline-none focus:ring-yellow-500 focus:opacity-50 focus:text-stone-900"
        placeholder="Search order"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}

export default SearchOrder;