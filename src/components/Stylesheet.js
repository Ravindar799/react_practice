import React from 'react'
import './myStyles.css'
function Stylesheet(props) {
  return (
    <div>
     { props.primary? <h1 className={ `primary font-xl` }>ravidnar</h1>:
      <h1>ravidnar</h1>}
    </div>
  )
}

export default Stylesheet
