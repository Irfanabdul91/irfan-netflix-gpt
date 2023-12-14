import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addPopularMovies } from '../utils/moviesSlice';
import { API_OPTIONS } from '../utils/constants';

const usePopularMovies = () => {
  //fetching the data from TMDB and update the store
  const dispatch = useDispatch();

  const getPopularMovies = async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS)
    const json = await data.json()
    //console.log(json.results);
    dispatch(addPopularMovies(json.results))
}
useEffect(()=>{
  getPopularMovies()
},[])
}

export default usePopularMovies;