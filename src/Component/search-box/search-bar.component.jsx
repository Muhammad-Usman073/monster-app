import React from "react";
import "./search-box.styles.css";
const SearchBox=props=>{
  
    return (
      <input
        className={`search-box ${props.className}`}
        type={props.type}
        placeholder={props.placeholderText}
        onChange={props.onSearchHandler}
      />
    );
  }

export default SearchBox;
