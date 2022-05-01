// Axios import
import axios from 'axios'

// Spotify in-memory database imports
import { getSpotifyUserToken } from '../../entities/spotify/database.js'

// Define constants
const SPOTIFY_API_BASE_URL = process.env.SPOTIFY_API_BASE_URL
const SPOTIFY_CLIENT_TOKEN = getSpotifyUserToken()

const searchArtists = async (query) => {
  const response = await axios({
    method: 'get',
    baseURL: SPOTIFY_API_BASE_URL,
    url: `v1/search?q=${query}&type=artist`,
    headers: {
      Authorization: `Bearer ${SPOTIFY_CLIENT_TOKEN}`
    }
  })

  return response.data.artists.items
}

export default searchArtists
