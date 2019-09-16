import React, { Component } from 'react'
// eslint-disable-next-line
import { connect } from 'react-redux'
// eslint-disable-next-line
import Search from './components/searchCities'
// eslint-disable-next-line
import DateInp from './components/testify'
// eslint-disable-next-line
import {Form} from 'semantic-ui-react'
import {useSelector, useDispatch} from 'react-redux'
// eslint-disable-next-line
import {test} from './actions'

/*
function App() {
  const btn = useSelector (state => state.testbtn)
  const dispatch = useDispatch()
  const handleClick = (btnId) => {
      dispatch(test(btnId))
      console.log(btnId)
  }
  return(
        <button id="button" onClick={() =>handleClick('btn chelou')} class="ui basic button">  
          <i class="icon user"></i>
          Add Friend {btn}
        </button>    
  );

}
export default App
*/



export class App extends Component {
  handleClick= (id) => {
    console.log(id)
  }
  render() {
    return (
      <div className="App"> 
       <Form>
        <Search></Search>
        <DateInp></DateInp>
        <button id="button" onClick={() =>this.handleClick('btn chelou')} class="ui basic button">
          <i class="icon user"></i>
          Add Friend
        </button>
       </Form>
        
      </div>
    )
  }
}

// eslint-disable-next-line
const mapStateToProps = (state) => ({
  
})

// eslint-disable-next-line
const mapDispatchToProps = {
  
}

export default connect(null, null)(App)


