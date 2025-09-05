
import type { Movie } from '../../types/movie'
import styles from './MovieGrid.module.css'

interface MovieGridProps {
  movies: Movie[]
  onSelect: (movie: Movie) => void
}

const MovieGrid = ({ movies, onSelect }: MovieGridProps) => {
  return (
    <ul className={styles.grid}>
      {movies.map((movie) => (
        <li key={movie.id} className={styles.card} onClick={() => onSelect(movie)}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className={styles.image}
          />
          <h3 className={styles.title}>{movie.title}</h3>
        </li>
      ))}
    </ul>
  )
}

export default MovieGrid
