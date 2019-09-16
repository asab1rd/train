import React, {useReducer, useEffect} from 'react'
 import Left from './components/leftContainer'
 import Right from './components/rightContainer'
import './assets/App.scss'
import cityReducer from './reducers/CityReducer'
import appContext from './reducers/appContext'
import axios from 'axios'
import "./assets/left.scss"
import "./assets/right.scss"
import "./assets/search.scss"

const initialState = {
  foundCities : [],
  popularCities: [],
  clickedInput:'',
  searchedWord: '',
  departInput: '',
  arrivedInput:'',
  departDate:'',
  returnDate:'',
}

export default function App() {
  const [state, dispatch] = useReducer(cityReducer,initialState)

  
  useEffect(() => {
    axios
      .get('https://api.comparatrip.eu/cities/popular/7')
      .then(res => {
      fetchPopular(res.data)
      })
      .catch(err => {
      console.log(err)
      })
    
  }, [])

  const fetchPopular = pop => {
    dispatch({type: 'FETCH_POPULAR', payload : pop})

  }

  const fetchFoundCities = cities => {
    dispatch({type: 'FETCH_INPUT', payload : cities})
  }


  const changeClicked = name => {
    dispatch({type: 'CLICKED_INPUT', payload: name})

  }
  const changeSearchedWord = word => {
    dispatch({type: 'SEARCHED_WORD', payload: word})
  }

  const setDepartInput = word => {
    console.log(word)
    dispatch({type: 'DEPART_INPUT', payload: word})
  }

  const setArrivedInput = word => {
    console.log(word)
    dispatch({type: 'ARRIVED_INPUT', payload: word})
  }

  const setDepartDate = date => {
    console.log(date)
    dispatch({type: 'DEPART_DATE', payload: date})
  }

  const setReturnDate = date => {
    console.log(date)
    dispatch({type: 'RETURN_DATE', payload: date})
  }
  


  
  // useEffect(() => {

  //   axios
  //       .get('https://api.tictactrip.eu/cities/popular/5')
  //       .then(res => {
  //         fetchPopular(res.data)
  //         // setstate(context.state)
  //       })
  //       .catch(err => {
  //           console.log(err)
  //       })
  // },[])
   
  return (
    <div className="App">
      <appContext.Provider
        value={{
            state,
            fetchFoundCities,
            fetchPopular, 
            changeClicked,
            changeSearchedWord,
            setArrivedInput,
            setDepartInput,
            setDepartDate,
            setReturnDate
          }}
      >
        <Left/>
        <Right/>
      </appContext.Provider>
    </div>
  )
}
