import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useMovieTrailer = (movieId) => {
 
const dispatch = useDispatch();


// fetching the trailer video & updating the store with trailer
const getMovieVideos = async () =>{
  const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US', API_OPTIONS)
  const json  = await data.json()
  //console.log(json);

  const filterData = json.results.filter((video) => video.type === 'Trailer')
  const trailer = filterData.length ? filterData[0] : json.results[0]
  //console.log(trailer);
  dispatch(addTrailerVideo(trailer))
}

useEffect(()=>{
  getMovieVideos()

},[])
}

export default useMovieTrailer