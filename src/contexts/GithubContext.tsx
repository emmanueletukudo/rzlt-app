import React, { createContext, useContext, useState } from "react";
import {User, mockUser, mockRepo, UserContextType, Repo} from "../models/user";
import {fetchUser, getRepos} from "../api/api";

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

  const searchUser = async (user: string) => {
    const res =  await fetchUser(user);
    setUser(res);
  }

  const fetchRepos = async(user: string, nums: number) => {
      const res = await getRepos(user, nums);
      setRepos(res);
      console.log(res);
  }

  const value = {
    user,
    repos,
    fetchRepos,
    searchUser,
  }


  return (
    <GithubContext.Provider value={value}>
    { children }
    </GithubContext.Provider>
	);

}

export default GithubProvider;
