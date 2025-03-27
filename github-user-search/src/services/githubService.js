import axios from 'axios';

const GITHUB_API_BASE_URL = 'https://api.github.com';

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${GITHUB_API_BASE_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      throw new Error('User not found');
    }
    throw error;
  }
};

export const searchUsers = async (query) => {
  try {
    let url = `${GITHUB_API_BASE_URL}/search/users?q=`;
    if (query.username) {
      url += `${query.username}+`;
    }
    if (query.location) {
      url += `location:${query.location}+`;
    }
    if (query.minRepos) {
      url += `repos:>=${query.minRepos}+`;
    }
    url = url.slice(0, -1); // Remove trailing '+'
    url += `&page=${query.page}`;

    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};
