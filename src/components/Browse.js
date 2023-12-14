import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearchPage from "./GptSearchPage";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
const showGptSearch = useSelector(store => store.gpt.showGptSearch)

  useNowPlayingMovies();
  useTopRatedMovies();
  usePopularMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      {showGptSearch ? (<GptSearchPage />) : (<><MainContainer />
      <SecondaryContainer /></>)}
      
      

      {/* 
      MAin conatainer
      - video title
      - video  trailer
      secondary container
       - movies list * n
       - cards * n
      
      */}
    </div>
  );
};

export default Browse;
