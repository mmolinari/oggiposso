import React from "react"

function DateSelector ( { dates, state, dispatch } ) {
  const handleChange = ( event ) => {
    dispatch({ type: 'date', 'date': event.target.value });
  }

  const items = []
  items.push(<option key="0" value="0">Scegli un giorno</option>)

  for (const value of dates) {
    items.push(<option key={ value } value={ value }>{ value }</option>)
  }

  return (
    <select value={ state.date } onChange={ handleChange }>
      { items }
    </select>
  );
}

export default DateSelector
