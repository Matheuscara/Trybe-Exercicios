const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name)
    });
};

const url = 'https://api.github.com/users/tryber/repos'

describe('when getRepos is defined', () => {
  it('should fetch list from project todo list', async () => {
    const repos = await getRepos(url);
    expect(repos).toContain('sd-01-block20-mysql-all-for-one');
    expect(repos).toContain('sd-01-block21-mysql-vocabulary-booster');
  });
  
}
)