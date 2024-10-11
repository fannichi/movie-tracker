import { useEffect, useState } from 'react';

export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(
    function () {
      //   callback?.();
      const controller = new AbortController();

      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError('');
          const response = await fetch(
            `http://www.omdbapi.com/?s=${query}&apikey=7ac164a`,
            { signal: controller.signal }
          );

          if (!response.ok) {
            throw new Error('Error fetching movies list');
          }

          const data = await response.json();

          if (data.response === 'False') {
            throw new Error('No movies found');
          }
          setMovies(data.Search);
          setError('');
        } catch (error) {
          console.error(error.message);
          if (error.name === 'AbortError') {
            setError(error.message);
          }
        } finally {
          setIsLoading(false);
        }
      }
      if (query.length < 3) {
        setMovies([]);
        setError('');
      }

      fetchMovies();

      return function () {
        controller.abort();
      };
    },
    [query]
  );

  return { movies, isLoading, error };
}
