const baseURL = "https://api.github.com";

type SParams = {
  q: string;
  page: string
  per_page: string
}

const fetchUser = (username: string) => {
  // const queryString = new URLSearchParams(params);
  const requestObj: RequestInit = {
    method: "GET",
    redirect: "follow",
  }

  const res = fetch(`${baseURL}/users/${username}`, requestObj)
    .then(res => res.text())
    .then(result => JSON.parse(result))
    .catch(err => console.log(err));
  return res;
}

const getRepos = (username: string, numbers: number) => {
  const res = fetch(`${baseURL}/users/${username}/repos?per_page=${numbers}`)
    .then((result) => result.text())
    .then(repos => JSON.parse(repos))
    .catch(err => console.log(err));
  return res;
}

const searchTopic = async (q: string, nums: number) => {
  // topics ? q = { query }{& page, per_page }
  const params: SParams = {
    q: `${q}&`,
    page: "1",
    per_page: `${nums}`,
  }
  const queryString = new URLSearchParams(params);

  const searchObj: RequestInit = {
    method: "GET",
    redirect: "follow",
  }

  const res = await fetch(`${baseURL}/search/topics?${queryString}`, searchObj)
    .then(res => res.text())
    .then(user => JSON.parse(user))
    .catch(err => console.log(err));
  return res;
}

const fetchHistory = () => {
  let res;
  const history = localStorage.getItem("search_terms");
  if (history) {
    res = JSON.parse(history);
  }
  return res;
}




export { baseURL, fetchUser, getRepos, searchTopic, fetchHistory };
