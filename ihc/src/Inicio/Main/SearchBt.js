import React from 'react';

function SearchBt(props) {
  const handleSearch = (e) => {
    e.preventDefault(); 
    props.handleSearch(e);
  };
  
  return (
    <form className="d-flex" role="search" id="searchForm" onSubmit={(e) => e.preventDefault()}>
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        id="searchInput"
        value={props.searchTerm}
        onChange={props.handleSearchChange}
      />
      <button className="btn btn-warning" type="submit" onClick={handleSearch}>
        Search
      </button>
    </form>
  );
}

export { SearchBt };
