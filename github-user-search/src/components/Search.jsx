import React, { useState, useCallback } from 'react';
import { fetchUserData, searchUsers } from '../services/githubService';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

function Search() {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [userData, setUserData] = useState(null);
  const [users, setUsers] = useState([]); // For multiple users in advanced search
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true); // Track if there are more pages to load
  const [isAdvancedSearch, setIsAdvancedSearch] = useState(false);

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleMinReposChange = (event) => {
    setMinRepos(event.target.value);
  };

  const handleBasicSearch = async (event) => {
    event.preventDefault();
    setUsers([]); // Clear previous advanced search results
    setUserData(null);
    setError('');
    setLoading(true);
    setPage(1);
    setHasMore(true);
    setIsAdvancedSearch(false);

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

  const handleAdvancedSearch = useCallback(async (loadMore = false) => {
    if (loading) return; // Prevent multiple concurrent requests

    if (!loadMore) {
      setUsers([]); // Clear previous search results
      setPage(1);
      setHasMore(true); // Reset for new search
    }

    setError('');
    setLoading(true);
    setIsAdvancedSearch(true);

    try {
      const query = {
        username,
        location,
        minRepos,
        page,
      };

      const result = await searchUsers(query);

      if (result.items.length === 0) {
        setHasMore(false);
        setLoading(false);
        if (users.length === 0) {
          setError('No users found matching your criteria.');
        }
        return;
      }
      if (loadMore) {
        setUsers((prevUsers) => [...prevUsers, ...result.items]);
      } else {
        setUsers(result.items);
      }

      setPage((prevPage) => prevPage + 1);
      setHasMore(result.items.length === 30); // GitHub API returns max 30 items per page
      setLoading(false);
    } catch (error) {
      console.error('Error searching users:', error);
      setError('Error searching users');
      setLoading(false);
      setHasMore(false);
    }
  }, [username, location, minRepos, page, loading, users.length]);

  const handleLoadMore = () => {
    if (hasMore && !loading) {
      handleAdvancedSearch(true);
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <form onSubmit={handleBasicSearch} className="flex items-center gap-4">
          <Input
            type="text"
            placeholder="Enter GitHub username"
            value={username}
            onChange={handleInputChange}
            className="flex-1"
          />
          <Button type="submit" disabled={loading}>
            Search
          </Button>
        </form>

        <Card>
          <CardHeader>
            <CardTitle>Advanced Search</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Input
                type="text"
                placeholder="Location"
                value={location}
                onChange={handleLocationChange}
              />
              <Input
                type="number"
                placeholder="Minimum Repositories"
                value={minRepos}
                onChange={handleMinReposChange}
              />
              <Button
                type="button"
                onClick={() => {
                  setPage(1);
                  setUsers([]);
                  setHasMore(true);
                  handleAdvancedSearch();
                }}
                disabled={loading}
                className="md:col-span-1"
              >
                Search Users
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {userData && !isAdvancedSearch && (
        <Card className="user-info">
          <CardHeader>
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src={userData.avatar_url} alt={userData.login} />
                <AvatarFallback>{userData.login.substring(0, 2)}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>{userData.name || userData.login}</CardTitle>
                <Badge variant="secondary">
                  {userData.followers} Followers
                </Badge>
                <Badge variant="secondary">
                  {userData.public_repos} Repos
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p>Username: {userData.login}</p>
            {userData.location && <p>Location: {userData.location}</p>}
            {userData.html_url && (
              <p>
                <a
                  href={userData.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View Profile on GitHub
                </a>
              </p>
            )}
          </CardContent>
        </Card>
      )}

      {/* Display for Advanced Search Results */}
      {isAdvancedSearch && users.length > 0 && (
        <div className="space-y-4">
          {users.map((user) => (
            <Card key={user.id} className="user-info">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={user.avatar_url} alt={user.login} />
                    <AvatarFallback>{user.login.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle>{user.login}</CardTitle>
                    {user.location && <p className="text-sm text-gray-500">Location: {user.location}</p>}
                    <div className="flex gap-2">
                      <Badge variant="secondary">
                        {user.followers} Followers
                      </Badge>
                      <Badge variant="secondary">
                        {user.public_repos} Repos
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View Profile on GitHub
                </a>
              </CardContent>
            </Card>
          ))}
          {hasMore && (
            <Button
              onClick={handleLoadMore}
              disabled={loading}
              className="w-full"
            >
              {loading ? 'Loading...' : 'Load More'}
            </Button>
          )}
        </div>
      )}
    </div>
  );
}

export default Search;
