import { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

import MoviesForm from './movies-form'

import { 
  getMovies, 
  filterMovies,
  addMovie,
  editMovie,
  removeMovie
} from '../data/movies'

function MoviesList() {
  const countries = [
    'Россия', 'США', 'Франция'
  ]

  const genres = [
    'триллер', 'боевик', 'драма', 'комедия'
  ]

  const [movies, setMovies] = useState(getMovies())

  const [filterName, setFilterName] = useState('')
  const [selectedGenres, setSelectedGenres] = useState({})

  const [showForm, setShowForm] = useState(false)
  const [formMode, setFormMode] = useState('')
  const [formMovie, setFormMovie] = useState({})

  function handleSearch(event) {
    const filterName = event.target.value.toLowerCase()
    setFilterName(filterName)

    const newMovies = filterMovies(filterName, selectedGenres)
    setMovies(newMovies)
  }

  function handleSelectedGenre(genre) {
    selectedGenres[genre] = !selectedGenres[genre]
    setSelectedGenres(selectedGenres)

    const newMovies = filterMovies(filterName, selectedGenres)
    setMovies(newMovies)
  }

  function handleRemoveMovie(id) {
    const newMovies = removeMovie(id)
    setMovies(newMovies)
  }

  function handlerAddMovie() {
    setShowForm(true)
    setFormMode('add')

    setFormMovie({
      name: '',
      year: 0,
      country: countries[0],
      genres: []
    })
  }

  function handleEditMovie(movie) {
    setShowForm(true)
    setFormMode('edit')

    setFormMovie(movie)
  }

  function handlerSubmitMovie(movie) {
    console.log(movie)

    const newMovies = formMode === 'add' ? 
      addMovie(movie) : 
      editMovie(movie)

    setMovies(newMovies)
  }

  return (
    <div>
      <Form className="movie-form">
        <Form.Group className="mb-3" controlId="formSearchId">
          <Form.Label>Поиск</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Искать по имени или стране"
            onChange={handleSearch}
          />
        </Form.Group>
        <div className="mb-3">
          {genres.map((genre) => (
            <Form.Check
              inline
              key={`inline-checkbox-${genre}`}
              label={genre}
              name="group1"
              type="checkbox"
              id={`inline-checkbox-${genre}`}
              onClick={() => handleSelectedGenre(genre)}
            />
          ))}
        </div>
      </Form>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Имя</th>
            <th>Год</th>
            <th>Страна</th>
            <th>Жанры</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {
            movies.map((movie) => {
              return (
                <tr key={movie.id}>
                  <td>{movie.id}</td>
                  <td>{movie.name}</td>
                  <td>{movie.year}</td>
                  <td>{movie.country}</td>
                  <td>{movie.genres.join(', ')}</td>
                  <td>
                    <Button 
                      variant="success" 
                      onClick={() => handleEditMovie(movie)}
                    >Редактировать</Button>

                    <Button 
                      variant="danger" 
                      onClick={() => handleRemoveMovie(movie.id)}
                    >Удалить</Button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
      <Button 
        variant="primary" 
        onClick={handlerAddMovie}
      >Добавить</Button>
      
      {
        showForm ? (
          <MoviesForm 
            movie={formMovie} 
            onSubmit={handlerSubmitMovie}
          ></MoviesForm>
        ) : null
      }
      
    </div>
  );
}

export default MoviesList;
