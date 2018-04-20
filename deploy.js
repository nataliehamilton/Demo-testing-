const request = require('request-promise-native');

let sha = process.env.TRAVIS_PULL_REQUEST_SHA

const run = async (sha) => {
  let response = await request.post({
    url: `https://api.github.com/repos/AnaMSteele/Demo-testing-/deployments?access_token=${process.env.GITHUB_ACCESS_TOKEN}`,
    headers: {
      'User-Agent': 'Waffle.io demo'
    },
    body: {
      ref: sha,
      auto_merge: false,
    },
    json: true
  })

  await request.post({
    url: `https://api.github.com/repos/AnaMSteele/Demo-testing-/deployments/${response.id}/statuses?access_token=${process.env.GITHUB_ACCESS_TOKEN}`,
    headers: {
      'User-Agent': 'Waffle.io demo'
    },
    body: {
      state: 'success',
    },
    json: true
  })
};

run(sha)