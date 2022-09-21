import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import Search from "../components/Search";
import Home from "../pages/Home";
import GithubProvider from "../contexts/GithubContext";


jest.mock("../api/api");
test("should render search input and button", async() => {
  const {getByTestId} = render(<Search/>);
  const searchInput = getByTestId("search-input");
  const searchBtn = getByTestId("search-btn");
  expect(searchBtn).toBeInTheDocument();
  expect(searchInput).toBeInTheDocument();
})

test("check if input change works", async() => {
  const {getByTestId} = render(<Search query="react"/>);
  const searchInput = getByTestId("search-input");
  fireEvent.change(searchInput);
  await waitFor(() => {
    expect(searchInput.value).toBe("react");
  })
})


test("search for user/repos on GitHub", async () => {
  const {getByTestId, getAllByTestId} = render(<GithubProvider><Home/></GithubProvider>);
  const searchInput = getByTestId("search-input");
  const searchBtn = getByTestId("search-btn");
  fireEvent.change(searchInput, {
    target: {
      value: "emmanueletukudo"
    }
  })
  await waitFor(() => expect(searchInput.value).toBe("emmanueletukudo"));
  fireEvent.click(searchBtn);
  await waitFor(() => {
    const username =  getByTestId("username");
    const repoList = getAllByTestId("repo-list");
    expect(username.textContent).toBe("Emmanuel Etukudo");
    expect(repoList.length).toBeGreaterThan(0);
  });
})
