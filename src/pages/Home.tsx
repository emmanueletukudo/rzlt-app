import React, { useState, useEffect } from 'react'
import Search from '../components/Search'
import UserCard from '../components/UserCard'
import { useGithub } from '../contexts/GithubContext';

function Home() {
  const [query,  setQuery] =  useState("");
  const [disabled , setDisabled] = useState<boolean>(true);
  const [show,  setShow] =  useState<boolean>(false);
  const gitHub =  useGithub();


  useEffect(() => {
    if (query === "") {
      setShow(false);
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [query])

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    gitHub.searchUser(query);
    gitHub.fetchRepos(query, 3);
    setShow(true)
  }

  return (
    <div className="wrapper">
      <h2>Github Users Directory</h2>
      <Search data-testid="home-search" disabled={disabled} handleSearch={(e) => handleSearch(e)} query={query}  setQuery={setQuery}/>
      {show && <UserCard/>}
    </div>
  )
}

export default Home
