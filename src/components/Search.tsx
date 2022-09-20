import React from 'react'
import {TextField, IconButton} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

type SProps = {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  handleSearch: (e: React.FormEvent<HTMLFormElement>) => void
}
const Search = ({query, setQuery, handleSearch}: SProps) => {
  return (
      <form className="search-form" onSubmit={(e) => handleSearch(e)}>
        <TextField
          value={query}
          id="search-bar"
          className="input__box"
          onChange={(e) => setQuery(e.target.value) }
          label="Enter a search query"
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
