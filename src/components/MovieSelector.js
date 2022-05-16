import React, { useContext } from "react"
import MovieContext from "../contexts/MovieContext"
import "./styles/Seat.css"

const Header = () => {

	const { movies } = useContext(MovieContext)
	const movieData = useContext(MovieContext)

	const GenerateOptions = () => {
		const moviesObject = movies.movieNames
		return Object.keys(moviesObject).map((movie, key) => {
			return <option value={movie} key={key}>{movie} - ${moviesObject[movie]}</option>
		})
	}

	const movieSwitchHandler = (e) => {
		const newMoviePrice = movies.movieNames[e.target.value]
		movieData.changeState({ ...movies, moviePrice: newMoviePrice })
	}

	return (
		{/*Use the GenerateOptions() funtion to generate movie list */ }
	)
}

export default Header
