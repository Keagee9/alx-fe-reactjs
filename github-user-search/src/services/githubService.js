const githubService = {
  searchUsers: async (searchParams) => {
    const { username, location, minRepos } = searchParams;
    let query = `q=${username}`;

    if (location) {
      query += `+location:${location}`;
    }
    if (minRepos) {
      query += `+repos:>=${minRepos}`;
    }

    const response = await fetch(`https://api.github.com/search/users?${query}`);
    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }
    return response.json();
  },
};

export default githubService;
