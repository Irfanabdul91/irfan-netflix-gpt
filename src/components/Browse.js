import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import Header from './Header'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'




const Browse = () => {
  useNowPlayingMovies()

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />

      {/* 
      MAin conatainer
      - video title
      - video  trailer
      secondary container
       - movies list * n
       - cards * n
      
      */}
      </div>
  )
}

export default Browse