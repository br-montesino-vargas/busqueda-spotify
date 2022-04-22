
const SearchBar = ( setBusqueda ) => {
  const handleSearch = (e) => {
    setBusqueda(e.target.value);
  };


  return (
    <input
      placeholder="JavaScript, React, CSS ..."
      className="w-3/5 rounded-full mx-4 shadow-md py-3 focus:shadow-xl duration-700 px-5 text-center outline-none"
      onChange={handleSearch}
    ></input>
  );
};

export default SearchBar;
