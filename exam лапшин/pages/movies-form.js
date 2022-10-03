import { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function MoviesForm(props) {
  const countries = [
    'Россия', 'США', 'Франция'
  ]

  const genres = [
    'триллер', 'боевик', 'драма', 'комедия'
  ]

  const [formData, setFormData] = useState(props.movie)

  function handleFormChange(name, value) {
    const newFormData = Object.assign({}, formData, { [name]: value })
    setFormData(newFormData)
  }

  function handlerSubmitMovie(event) {
    event.preventDefault()

    const formErrors = {}

    if (formData.name === '') {
        formErrors.name = 'Имя пустое'
    }

    if (+formData.year < 1850) {
        formErrors.year = 'Некорректный год'
    }

    if (Object.keys(formErrors).length > 0) {
        alert(JSON.stringify(formErrors, null, 4))

        return
    }

    props.onSubmit(formData)
  }

  return (
    <div>
        <Form className="movie-form">
            <Form.Group className="mb-3" controlId="formMovieId">
                <Form.Label>Имя</Form.Label>
                <Form.Control 
                type="text" 
                placeholder="Имя"
                value={formData.name}
                onChange={(event) => handleFormChange('name', event.target.value)}
                />

                <Form.Label>Год</Form.Label>
                <Form.Control 
                type="number"
                min="1850"
                placeholder="Год"
                value={formData.year}
                onChange={(event) => handleFormChange('year', event.target.value)}
                />

                <Form.Label>Страна</Form.Label>
                <Form.Select aria-label="Default select example"
                onChange={(event) => handleFormChange('country', event.target.value)}
                >
                {
                    countries.map(country => {
                    return (
                        <option
                        selected={formData.country === country} 
                        value={country}
                        >{country}</option>
                    )
                    })
                }
                </Form.Select>
                
                <Form.Label>Жанры</Form.Label>
                <div className="mb-3">
                {genres.map((genre) => (
                    <Form.Check
                    inline
                    key={`inline-checkbox-${genre}`}
                    label={genre}
                    name="group1"
                    type="checkbox"
                    id={`inline-checkbox-${genre}`}
                    />
                ))}
            </div>
        </Form.Group>

        <Button 
            variant="primary" 
            onClick={handlerSubmitMovie}
        >Применить</Button>
        </Form>
    </div>
  );
}

export default MoviesForm;
