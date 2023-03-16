import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const url = "https://winkart.onrender.com/allProducts";

const Search = () => {
  const [find, setFind] = useState();
  const [searchProducts, setProSearch] = useState([]);

  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");

  useEffect(() => {
    fetch(url, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setProSearch(data);
        handleSearch();
      });
  }, []);

  const handleSearch = () => {
    let output = searchProducts.filter((item) => {
      return item.name.toLowerCase().indexOf(query.toLowerCase()) > -1;
    });
    setFind(output);
  };

  const displayPro = () => {
    if (find) {
      return (
        <h1>
          {find.map((item) => {
            return item.name;
          })}
        </h1>
      );
    }
  };

  return (
    <>
      <div className="text-center">
        <h3>here is result for ... {query}</h3>
      </div>
      {displayPro()}
    </>
  );
};

export default Search;
