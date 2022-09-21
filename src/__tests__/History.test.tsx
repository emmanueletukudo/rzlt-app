import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import Search from "../components/Search";
import History from "../pages/History";
import GithubProvider from "../contexts/GithubContext";


test("should render search input and button", async() => {
  const {getByTestId} = render(<Search/>);
  const searchInput = getByTestId("search-input");
  const searchBtn = getByTestId("search-btn");
  expect(searchBtn).toBeInTheDocument();
  expect(searchInput).toBeInTheDocument();
})


test("Should search for topic on GitHUb",  async() => {
   const {getByTestId, getAllByTestId} = render(<GithubProvider><History /></GithubProvider>);
   const searchInput = getByTestId("search-input");
   const searchBtn = getByTestId("search-btn");
   fireEvent.change(searchInput, {
     target: {
       value: "react"
     }
   })
   await waitFor(() => expect(searchInput.value).toBe("react"));
   fireEvent.click(searchBtn);
   await waitFor(() => {
     const searchResult = getAllByTestId("search-result");
     const searchName =  getAllByTestId("search-name");
     expect(searchName[0].textContent).toBe("React");
     expect(searchResult.length).toBeGreaterThan(0);
   });
})

test("Should fetch previous searches", async() => {
  const {getByTestId, getAllByTestId} = render(<GithubProvider><History /></GithubProvider>);
  const searchInput = getByTestId("search-input");
  const searches = getAllByTestId("previous-searches");
  expect(searches.length).toBeGreaterThan(0);
  await waitFor (() => {
    const previouSearch = getAllByTestId("previous-search");
    fireEvent.click(previouSearch[0]);
    expect(searchInput.value).toBe(previouSearch[0].textContent);
  });
})
