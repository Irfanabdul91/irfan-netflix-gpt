import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BG_URL } from '../utils/constants'

const GptSearchPage = () => {
  return (
    <div>
           <div className="absolute -z-10">
      <img alt="Background Logo" src = {BG_URL} />
      </div>
        <GptSearchBar />
        <GptMovieSuggestions />
    </div>
  )
}

export default GptSearchPage