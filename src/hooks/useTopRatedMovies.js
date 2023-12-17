import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTopRatedMovies } from '../utils/moviesSlice';
import { API_OPTIONS } from '../utils/constants';

const useTopRatedMovies = () => {
  //fetching the data from TMDB and update the store
  const dispatch = useDispatch();

  const topRatedMovies = useSelector(
    (store) => store.movies.topRatedMovies
  );

  const getTopRatedMovies = async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS)
    const json = await data.json()
    //console.log(json.results);
    dispatch(addTopRatedMovies(json.results))
}
useEffect(()=>{
 !topRatedMovies && getTopRatedMovies()
},[])
}

export default useTopRatedMovies;