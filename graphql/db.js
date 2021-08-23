let movies = [
  {
    id: 0,
    name: "Star wars",
    score: 99,
  },
  {
    id: 1,
    name: "Avengers",
    score: 97,
  },
  {
    id: 2,
    name: "Iron man3",
    score: 92,
  },
  {
    id: 3,
    name: "Logan",
    score: 100,
  },
];

export const getMovies = () => movies;

export const getById = (id) => {
  const filteredPeople = people.filter((person) => id === person.id);
  return filteredPeople[0];
};

export const deleteMovie = (id) => {
  const cleanedMovies = movies.filter((movie) => movie.id !== id);
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length + 1}`,
    name,
    score,
  };
  movies.push(newMovie);
  return newMovie;
};
