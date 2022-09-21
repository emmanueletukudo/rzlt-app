import React, { useState, useEffect } from 'react'
import Search from './Search'
import { useGithub } from '../contexts/GithubContext';
import SearchResult from '../components/SearchResult'

function GithubSearch() {
  const [query, setQuery] = useState("");
  const [disabled, setDisabled] = useState<boolean>(true);
  const [show, setShow] = useState<boolean>(false);
  const { searchGithub, history, fetchOldSearches} = useGithub();

  useEffect(() => {
    if (query === "") {
      setShow(false);
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [query])

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
    setShow(true)
  }

  return (
    <div style={{width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
      <h2>Search any topic on Github <a href='/'>Home</a></h2>
      <Search query={query} setQuery={setQuery}  disabled={disabled} handleSearch={(e) => handleSearch(e)} />
      <div data-testid="previous-searches" style={{marginTop: "20px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
      Previous searches:
        {history && history.map((h, k) => (
          <div className="badge" data-testid="previous-search" onClick={() => setQuery(h.search)} key={k}>{h.search}</div>
        ))}
        </div>
        {show && <SearchResult/>}
    </div>
  )
}

export default GithubSearch
