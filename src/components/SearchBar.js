import React, { useState } from "react";

function SearchBar(props) {
  const [query, setQuery] = useState("");

  function handleQuery(event, query) {
    if (event.key === "Enter") {
      props.searchFunction(query);
      setQuery("");
    }
  }

  return (
    <div className="searchBox">
      <input
        type="text"
        placeholder="Rechercher..."
        value={query}
        className="searchBar"
        autoFocus
        onChange={(event) => setQuery(event.target.value)}
        onKeyPress={(event) => handleQuery(event, query)}
      />
      <span className={props.error ? "onError" : "hidden"}>
        La ville n'a pas été trouvée :/
      </span>
    </div>
  );
}

export default SearchBar;
