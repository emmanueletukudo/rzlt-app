import React, { useState } from 'react'
import Search from '../components/Search'
import UserCard from '../components/UserCard'
import { useGithub } from '../contexts/GithubContext';

function Home() {
  const [query,  setQuery] =  useState("");
  const gitHub =  useGithub();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    gitHub.searchUser(query);
    gitHub.fetchRepos(query, 3);
  }

  return (
    <div className="wrapper">
      <h2>Github Users Directory</h2>
      <Search handleSearch={(e) => handleSearch(e)} query={query}  setQuery={setQuery}/>
      <UserCard/>
    </div>
  )
}

export default Home
