const SearchBox = (p) => {
  return (
    <input
      type="search"
      className={p.className}
      onChange={p.onChangeHandler}
      placeholder={p.placeholder}
    />
  );
};
export default SearchBox;
