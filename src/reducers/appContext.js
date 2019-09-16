 import {createContext} from 'react'
 
 const appContext = createContext({
    state: {},
    fetchPopular: pop => {},
    fetchFoundCities: cities => {},
  })

  
export default appContext