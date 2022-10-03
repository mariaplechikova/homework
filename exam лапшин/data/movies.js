let counter = 2

let movies = [
    {
      id: 1,
      name: 'Матрица', // { ru: 'Матрица, en: 'Matrix' }
      year: 1999,
      country: 'США',
      genres: [ 'триллер', 'боевик', 'драма' ]
    },
    {
      id: 2,
      name: 'Амели',
      year: 2002,
      country: 'Франция',
      genres: [ 'драма', 'комедия' ]
    }
]

export function getMovies() {
    return [].concat(movies)
}

export function filterMovies(filterName, genres) {
    let newMovies = movies.filter(movie => {
      const name = movie.name.toLowerCase()
      const country = movie.country.toLowerCase()

      console.log(name.includes(filterName) || country.includes(filterName))

      return name.includes(filterName) || country.includes(filterName)
    })

    const genresArr = []

    for (let key of Object.keys(genres)) {
      if (genres[key] === true) {
        genresArr.push(key)
      }
    }

    newMovies = newMovies.filter(movie => {
      let flag = true
      
      for (let key of genresArr) {
        if (!movie.genres.includes(key)) {
          flag = false
          break
        }
      }

      return flag
    })

    return newMovies
}

export function addMovie(movie) {
    movie.id = ++counter
    movies.push(movie)

    return getMovies()
}

export function editMovie(editMovie) {
    const index = movies.findIndex(movie => movie.id === editMovie.id)
    movies[index] = editMovie

    return getMovies()
}

export function removeMovie(id) {
    movies = movies.filter(movie => movie.id !== id)

    return getMovies()
}