import React, { useState } from 'react'
import Search from './Search'
import { useGithub } from '../contexts/GithubContext';
import SearchResult from './SearchResult';


function GithubSearch() {
  const [query, setQuery] = useState("");
  const { searchGithub, searches} = useGithub();

  const handleSearch = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchGithub(query, 6);
    console.log(searches);
  }

  return (
    <div style={{width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
      <h2>Search any topic on Github</h2>
      <Search query={query} setQuery={setQuery}  handleSearch={(e) => handleSearch(e)} />
    </div>
  )
}

export default GithubSearch
