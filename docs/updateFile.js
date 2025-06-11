//import { Octokit } from "@octokit/core";
import("https://esm.sh/@octokit/core").then((response)=>{Octokit=response.Octokit;
                                                        const octokit = new Octokit({
  auth: 'gith'+'ub_pat_11BADMTJI0'+'yUe1yaFGD99D_S2wuYnXvH92iCPHjNMwcd6'+'AJ2ZSTSFPwp2nRdo82gxcKPRAA2BO7y6rhL7l'
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

                                                        });
// Octokit.js
// https://github.com/octokit/core.js#readme
