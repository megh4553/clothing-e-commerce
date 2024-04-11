import React, { useState } from "react";
import search_icon from "../Assets/711319.png";
import "./Search.css";

const Search = (props, {setResults}) => {
  const [input, setInput] = useState("");
  const fetchData = (value) => {
    fetch("http://localhost:4000/allproducts")
      .then((resopne) => {
        resopne.json();
      })
      .then((json) => {
        const results = json.filter((products) => {
          return (
            value &&
            products &&
            products.name &&
            products.name.toLowerCase().includes(value)
          );
        });
        setResults(results)
      });
  };
  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };
  return (
    <div>
      <div className="search1">
        <button
          style={{ border: "none", backgroundColor: "rgb(203, 197, 197)" }}
        >
          <img src={search_icon} alt="" width={25} height={25} />
        </button>
        {/* <input type='button' src={search_icon} className='search-icon'  width={25} height={25}  alt="" /> */}
        <input
          type="text"
          placeholder="Search"
          className="search2"
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;
