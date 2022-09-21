import React, { useState, useEffect } from 'react'
import Search from './Search'
import { useGithub } from '../contexts/GithubContext';


function GithubSearch() {
  const [query, setQuery] = useState("");
  const { searchGithub, history, fetchOldSearches} = useGithub();

  useEffect(() => {
    //console.log(history);
    const searchTerms = async() => {
       fetchOldSearches();
    }
    searchTerms();
  }, [query])

  const handleSearch = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchGithub(query, 6);
  }

  return (
    <div style={{width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
      <h2>Search any topic on Github</h2>
      <Search query={query} setQuery={setQuery}  handleSearch={(e) => handleSearch(e)} />
      <div data-testid="previous-searches" style={{marginTop: "20px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
      Previous searches:
        {history && history.map((h, k) => (
          <div className="badge" data-testid="previous-search" onClick={() => setQuery(h.search)} key={k}>{h.search}</div>
        ))}
        </div>
    </div>
  )
}

export default GithubSearch
