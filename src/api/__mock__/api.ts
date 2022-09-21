const baseURL = "https://api.github.com";

const fetchUsers = (q: string) => {
  return Promise.resolve(
    {
      login: "emmanueletukudo",
      id: 39107093,
      node_id: "MDQ6VXNlcjM5MTA3MDkz",
      avatar_url: "https://avatars.githubusercontent.com/u/39107093?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/emmanueletukudo",
      html_url: "https://github.com/emmanueletukudo",
      followers_url: "https://api.github.com/users/emmanueletukudo/followers",
      following_url: "https://api.github.com/users/emmanueletukudo/following{/other_user}",
      gists_url: "https://api.github.com/users/emmanueletukudo/gists{/gist_id}",
      starred_url: "https://api.github.com/users/emmanueletukudo/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/emmanueletukudo/subscriptions",
      organizations_url: "https://api.github.com/users/emmanueletukudo/orgs",
      repos_url: "https://api.github.com/users/emmanueletukudo/repos",
      events_url: "https://api.github.com/users/emmanueletukudo/events{/privacy}",
      received_events_url: "https://api.github.com/users/emmanueletukudo/received_events",
      type: "User",
      site_admin: false,
      name: "Emmanuel Etukudo",
      company: "@arangodb",
      blog: "https://dev.to/eaetukudo",
      location: "Lagos. Nigeria",
      email: null,
      hireable: null,
      bio: "A full-stack developer & Technical Writer aspiring to change the world.\r\n",
      twitter_username: "eetukudo_",
      public_repos: 51,
      public_gists: 7,
      followers: 28,
      following: 99,
      created_at: "2018-05-09T00:51:38Z",
      updated_at: "2022-06-01T10:46:52Z"
    }
  )
}

const getRepos = (username: string, numbers: number) => {
  return Promise.resolve(
    [{
      "id": 503405561,
      "node_id": "R_kgDOHgFb-Q",
      "name": "andela-test",
      "full_name": "emmanueletukudo/andela-test",
      "private": false,
      "owner": {
        "login": "emmanueletukudo",
        "id": 39107093,
        "node_id": "MDQ6VXNlcjM5MTA3MDkz",
        "avatar_url": "https://avatars.githubusercontent.com/u/39107093?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/emmanueletukudo",
        "html_url": "https://github.com/emmanueletukudo",
        "followers_url": "https://api.github.com/users/emmanueletukudo/followers",
        "following_url": "https://api.github.com/users/emmanueletukudo/following{/other_user}",
        "gists_url": "https://api.github.com/users/emmanueletukudo/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/emmanueletukudo/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/emmanueletukudo/subscriptions",
        "organizations_url": "https://api.github.com/users/emmanueletukudo/orgs",
        "repos_url": "https://api.github.com/users/emmanueletukudo/repos",
        "events_url": "https://api.github.com/users/emmanueletukudo/events{/privacy}",
        "received_events_url": "https://api.github.com/users/emmanueletukudo/received_events",
        "type": "User",
        "site_admin": false
      },
      "html_url": "https://github.com/emmanueletukudo/andela-test",
      "description": null,
      "fork": false,
      "url": "https://api.github.com/repos/emmanueletukudo/andela-test",
      "forks_url": "https://api.github.com/repos/emmanueletukudo/andela-test/forks",
      "keys_url": "https://api.github.com/repos/emmanueletukudo/andela-test/keys{/key_id}",
      "collaborators_url": "https://api.github.com/repos/emmanueletukudo/andela-test/collaborators{/collaborator}",
      "teams_url": "https://api.github.com/repos/emmanueletukudo/andela-test/teams",
      "hooks_url": "https://api.github.com/repos/emmanueletukudo/andela-test/hooks",
      "issue_events_url": "https://api.github.com/repos/emmanueletukudo/andela-test/issues/events{/number}",
      "events_url": "https://api.github.com/repos/emmanueletukudo/andela-test/events",
      "assignees_url": "https://api.github.com/repos/emmanueletukudo/andela-test/assignees{/user}",
      "branches_url": "https://api.github.com/repos/emmanueletukudo/andela-test/branches{/branch}",
      "tags_url": "https://api.github.com/repos/emmanueletukudo/andela-test/tags",
      "blobs_url": "https://api.github.com/repos/emmanueletukudo/andela-test/git/blobs{/sha}",
      "git_tags_url": "https://api.github.com/repos/emmanueletukudo/andela-test/git/tags{/sha}",
      "git_refs_url": "https://api.github.com/repos/emmanueletukudo/andela-test/git/refs{/sha}",
      "trees_url": "https://api.github.com/repos/emmanueletukudo/andela-test/git/trees{/sha}",
      "statuses_url": "https://api.github.com/repos/emmanueletukudo/andela-test/statuses/{sha}",
      "languages_url": "https://api.github.com/repos/emmanueletukudo/andela-test/languages",
      "stargazers_url": "https://api.github.com/repos/emmanueletukudo/andela-test/stargazers",
      "contributors_url": "https://api.github.com/repos/emmanueletukudo/andela-test/contributors",
      "subscribers_url": "https://api.github.com/repos/emmanueletukudo/andela-test/subscribers",
      "subscription_url": "https://api.github.com/repos/emmanueletukudo/andela-test/subscription",
      "commits_url": "https://api.github.com/repos/emmanueletukudo/andela-test/commits{/sha}",
      "git_commits_url": "https://api.github.com/repos/emmanueletukudo/andela-test/git/commits{/sha}",
      "comments_url": "https://api.github.com/repos/emmanueletukudo/andela-test/comments{/number}",
      "issue_comment_url": "https://api.github.com/repos/emmanueletukudo/andela-test/issues/comments{/number}",
      "contents_url": "https://api.github.com/repos/emmanueletukudo/andela-test/contents/{+path}",
      "compare_url": "https://api.github.com/repos/emmanueletukudo/andela-test/compare/{base}...{head}",
      "merges_url": "https://api.github.com/repos/emmanueletukudo/andela-test/merges",
      "archive_url": "https://api.github.com/repos/emmanueletukudo/andela-test/{archive_format}{/ref}",
      "downloads_url": "https://api.github.com/repos/emmanueletukudo/andela-test/downloads",
      "issues_url": "https://api.github.com/repos/emmanueletukudo/andela-test/issues{/number}",
      "pulls_url": "https://api.github.com/repos/emmanueletukudo/andela-test/pulls{/number}",
      "milestones_url": "https://api.github.com/repos/emmanueletukudo/andela-test/milestones{/number}",
      "notifications_url": "https://api.github.com/repos/emmanueletukudo/andela-test/notifications{?since,all,participating}",
      "labels_url": "https://api.github.com/repos/emmanueletukudo/andela-test/labels{/name}",
      "releases_url": "https://api.github.com/repos/emmanueletukudo/andela-test/releases{/id}",
      "deployments_url": "https://api.github.com/repos/emmanueletukudo/andela-test/deployments",
      "created_at": "2022-06-14T14:57:34Z",
      "updated_at": "2022-06-14T14:59:31Z",
      "pushed_at": "2022-06-14T14:59:28Z",
      "git_url": "git://github.com/emmanueletukudo/andela-test.git",
      "ssh_url": "git@github.com:emmanueletukudo/andela-test.git",
      "clone_url": "https://github.com/emmanueletukudo/andela-test.git",
      "svn_url": "https://github.com/emmanueletukudo/andela-test",
      "homepage": null,
      "size": 297,
      "stargazers_count": 0,
      "watchers_count": 0,
      "language": "JavaScript",
      "has_issues": true,
      "has_projects": true,
      "has_downloads": true,
      "has_wiki": true,
      "has_pages": false,
      "forks_count": 0,
      "mirror_url": null,
      "archived": false,
      "disabled": false,
      "open_issues_count": 0,
      "license": null,
      "allow_forking": true,
      "is_template": false,
      "web_commit_signoff_required": false,
      "topics": [],
      "visibility": "public",
      "forks": 0,
      "open_issues": 0,
      "watchers": 0,
      "default_branch": "main"
    }]
  )
}

const searchTopic = (q: string, nums: number) => {
  return Promise.resolve(
    [
      {
        "name": "react",
        "display_name": "React",
        "short_description": "React is an open source JavaScript library used for designing user interfaces.",
        "description": "React (also known as React.js or ReactJS) is a JavaScript library that makes developing interactive user interfaces simple.",
        "created_by": "Jordan Walke",
        "released": "March 2013",
        "created_at": "2016-11-22T16:32:37Z",
        "updated_at": "2022-09-20T09:14:44Z",
        "featured": true,
        "curated": true,
        "score": 1
      },
      {
        "name": "react-native",
        "display_name": "React Native",
        "short_description": "React Native is a JavaScript mobile framework developed by Facebook.",
        "description": "React Native is a JavaScript mobile framework developed by Facebook. It allows developers to build Android and iOS mobile apps using JavaScript and reuse code across web and mobile applications.",
        "created_by": "Facebook",
        "released": "January 2015",
        "created_at": "2017-01-31T21:11:16Z",
        "updated_at": "2022-09-20T09:04:14Z",
        "featured": true,
        "curated": true,
        "score": 1
      },
      {
        "name": "react-router",
        "display_name": "React Router",
        "short_description": "React Router is a fully-featured client and server-side routing library for React.",
        "description": "React Router is a fully-featured client and server-side routing library for React. React Router runs anywhere React runs; on the web, on the server with node.js, and on React Native.",
        "created_by": "Ryan Florence & Michael Jackson",
        "released": "November 10 2015",
        "created_at": "2017-01-31T21:29:04Z",
        "updated_at": "2022-09-19T00:37:10Z",
        "featured": false,
        "curated": true,
        "score": 1
      },
    ]
  )
}

const fetchHistory = () => {
  Promise.resolve(
    [
      {
        "search": "react"
      },
      {
        "search": "aws"
      },
    ]
  )
}

export { baseURL, fetchUsers, getRepos, searchTopic, fetchHistory }
