import MoviesList from './MoviesList'
import { useSelector } from 'react-redux'


const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies)
 
  return (
    movies.nowPlayingMovies &&(
      <div className=' bg-black '>
    <div className=' mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20'>
      <MoviesList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MoviesList title={"Top Rated Movies"} movies={movies.topRatedMovies}/>
      <MoviesList title={"Popular"} movies={movies.popularMovies}/>
      <MoviesList title={"Upcoming Movies"} movies={movies.upcomingMovies}/>
      <MoviesList title={"Horror"} movies={movies.nowPlayingMovies}/>
    </div>
    </div>
  )
  )
}

export default SecondaryContainer