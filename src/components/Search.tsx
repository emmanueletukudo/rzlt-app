import React, { useState } from 'react'
import {TextField, IconButton} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {useGithub} from "../contexts/GithubContext";

const Search = () => {
  const [user, setUser] =  useState("");
  const gitHub =  useGithub();

  const handleFecth = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    gitHub.searchUser(user);
    gitHub.fetchRepos(user, 3);
  }
  return (
      <form className="search-form" onSubmit={(e) => handleFecth(e)}>
        <TextField
          value={user}
          id="search-bar"
          className="input__box"
          onChange={(e) => setUser(e.target.value) }
          label="Enter a username"
          variant="outlined"
          placeholder="Search..."
          size="small"
        />
        <IconButton type="submit" aria-label="search" className="input_submit">
          <SearchIcon style={{ fill: "blue" }} />
        </IconButton>
  </form>
  )
}

export default Search
