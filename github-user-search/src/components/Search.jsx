import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

function Search() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setUserData(null);
    setError('');
    setLoading(true);

    try {
      const data = await fetchUserData(username);
      setUserData(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching user data:', error);
      setError('Looks like we cant find the user');
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={handleInputChange}
        />
        <button type="submit" disabled={loading}>
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      {userData && (
        <div className="user-info">
          {userData.avatar_url && (
            <img
              src={userData.avatar_url}
              alt={`${userData.login}'s avatar`}
              style={{ width: '100px', height: '100px', borderRadius: '50%' }}
            />
          )}
          <h3>{userData.name || userData.login}</h3>
          <p>Username: {userData.login}</p>
          {userData.html_url && (
            <p>
              <a
                href={userData.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Profile on GitHub
              </a>
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default Search;
