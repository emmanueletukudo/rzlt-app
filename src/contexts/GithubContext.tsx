import React, { createContext, useContext, useEffect, useState } from "react";
import {User, mockUser, mockRepo, UserContextType, Repo, Search, mockSearch, mockHistory, History} from "../models/user";
import {fetchUser, getRepos, searchTopic, fetchHistory} from "../api/api";

type GProps = {
  children: React.ReactNode;
}
export const GithubContext = createContext<UserContextType | null>(null);

export function useGithub() {
  const context = useContext(GithubContext)
  if (context === null) {
      throw new Error(
        "GithubProvider must be wrapped inside the provider, " +
        "otherwise it will not function correctly."
      )
  }
  return context;
}

const GithubProvider = ({ children }: GProps) => {
  const [user, setUser] = useState<User>(mockUser);
  const [repos, setRepos] = useState<Repo[]>(mockRepo);
  const [searches, setSearches] =  useState<Search[]>(mockSearch)
  const [history, setHistroy] =  useState<History[]>(mockHistory)

  const searchUser = async (user: string) => {
    const res =  await fetchUser(user);
    setUser(res);
  }

  const fetchRepos = async(user: string, nums: number) => {
      const res = await getRepos(user, nums);
      setRepos(res);
  }

  const searchGithub = async(q: string, nums: number) => {
    let searchTerms =  [];
      const res =  await searchTopic(q, nums);
      if(res.items.length > 0) {
        let query = {"search": q }
        const history = localStorage.getItem("search_terms");
        if (history) {
          const historyJSON =  JSON.parse(history);
          for (let h = 0; h < historyJSON.length; h++) {
            const element = historyJSON[h];
            if (element.search !== q ) {
              searchTerms.push(element);
            }
          }
          searchTerms.push(query);
          localStorage.setItem("search_terms", JSON.stringify(searchTerms));
        }

      }
      setSearches(res.items);
  }

  const fetchOldSearches = async () => {
      const res = await fetchHistory();
      setHistroy(res);
      console.log(res);
  }

  useEffect(() => {
    fetchOldSearches();
  }, [])
  const value = {
    user,
    repos,
    searches,
    history,
    fetchOldSearches,
    fetchRepos,
    searchUser,
    searchGithub
  }


  return (
    <GithubContext.Provider value={value}>
    { children }
    </GithubContext.Provider>
	);

}

export default GithubProvider;
