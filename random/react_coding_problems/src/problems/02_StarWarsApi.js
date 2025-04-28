import { useEffect, useState } from 'react';

const StarWarsApi = () => {
  const [actors, setActors] = useState([]);
  const [movies, setMovies] = useState([]);
  const [titles, setTitles] = useState([]);
  const [hovered, setHovered] = useState(false);
  const [nextPageUrl, setNextPageUrl] = useState(null);
  const [prevPageUrl, setPrevPageUrl] = useState(null);

  useEffect(() => {
    fetchActors('https://swapi.py4e.com/api/people');
    fetchMovies();
  }, []);

  const fetchActors = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data)
      setActors(data.results);
      setNextPageUrl(data.next);
      setPrevPageUrl(data.previous);
    } catch (error) {
      console.error(error?.message);
    }
  };

  const fetchMovies = async () => {
    try {
      const res = await fetch('https://swapi.py4e.com/api/films');
      const data = await res.json();
      setMovies(data.results);
    } catch (error) {
      console.error(error?.message);
    }
  };

  const showMovies = (films) => {
    const extractedTitles = movies
      .filter((movie) => films.includes(movie.url))
      .map((movie) => movie.title);
    setTitles(extractedTitles);
    setHovered(true);
  };

  const handleNext = () => {
    if (nextPageUrl) fetchActors(nextPageUrl);
  };

  const handlePrev = () => {
    if (prevPageUrl) fetchActors(prevPageUrl);
  };

  return (
    <div style={styles.PageCont}>
      <h2>StarWarsAPI</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={styles.leftCont}>Character Name</th>
            <th style={styles.rightCont}>StarWar Movie List</th>
          </tr>
        </thead>
        <tbody>
          {actors.map((actor, index) => (
            <tr
              key={actor.name}
              onMouseOver={() => showMovies(actor.films)}
              style={{ verticalAlign: 'top' }}
            >
              <td style={styles.leftCont}>{actor.name}</td>
              {index === 0 && (
                <td style={styles.rightCont} rowSpan={actors.length}>
                  {!hovered ? (
                    <p>No Character Selected</p>
                  ) : (
                    <ul>
                      {titles.map((title) => (
                        <li key={title}>{title}</li>
                      ))}
                    </ul>
                  )}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
        <button onClick={handlePrev} disabled={!prevPageUrl}>
          Previous
        </button>
        <button onClick={handleNext} disabled={!nextPageUrl}>
          Next
        </button>
      </div>
    </div>
  );
};

const styles = {
  PageCont: {
    height: '100%',
    width: '100%',
    padding: '20px',
    boxSizing: 'border-box',
  },
  leftCont: {
    padding: '10px',
    width: '40%',
    backgroundColor: 'white',
    color: 'black',
    textAlign: 'left',
    border: '1px solid #ccc',
  },
  rightCont: {
    padding: '10px',
    width: '60%',
    backgroundColor: 'black',
    color: 'white',
    textAlign: 'left',
    border: '1px solid #ccc',
  },
};

export default StarWarsApi;
