import React, {useState, useContext} from 'react'
import { DatesRangeInput } from 'semantic-ui-calendar-react'
import {Form} from 'semantic-ui-react'
import appContext from '../reducers/appContext'


function Calendar(props) {
    const context = useContext(appContext)
    const [date, setdate] = useState('')

    const handleDateChange = (event, {value}) => {
        setdate(value)
        switch (props.nature) {
          case "departDate":
            context.setDepartDate(value.slice(0,10))
            break;
          case "returnDate":
            context.setReturnDate(value.slice(13, 23))
            break;
          
          default:
            break;
        }
      }
     
    return (
      <div className="calendar">
          <Form>
          <DatesRangeInput
            disableMinute
            closeOnMouseLeave
            inline
            name='date'
            value={date}
            onChange={handleDateChange}
          />
        </Form>
      </div>
    )
}

export default Calendar
