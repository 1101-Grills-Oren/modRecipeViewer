import { Octokit } from "@octokit/core";
// Octokit.js
// https://github.com/octokit/core.js#readme
const octokit = new Octokit({
  auth: 'YOUR-TOKEN'
});
get=function(owner,repo,path){
// Octokit.js
// https://github.com/octokit/core.js#readme


return await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
  owner: owner,
  repo: repo,
  path: path,
  headers: {
    'X-GitHub-Api-Version': '2022-11-28'
  }
});
};
set=function(owner,repo,path,content){
  
  await octokit.request('PUT /repos/{owner}/{repo}/contents/{path}', {
  owner: owner,
  repo: repo,
  path: path,
  message: 'a commit',
  committer: {
    name: '???',
    email: '???'
  },
  content: btoa(content),
  headers: {
    'X-GitHub-Api-Version': '2022-11-28'
  }
});
  return;
};
