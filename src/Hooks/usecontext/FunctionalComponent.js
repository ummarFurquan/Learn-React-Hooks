import React from 'react'
import { useTheme, useThemeUpdate } from './ThemeContext'

export default  function FunctionalComponent() {

  const darkTheme = useTheme()
  const toggleTheme = useThemeUpdate()

  const themeStyles = {
    backgroundColor: darkTheme ? '#333' : '#CCC',
    color : darkTheme ? '#CCC' : '#333',
    padding : '2rem',
    margin: '2rem'
  }
  return (
    <>
    <button className= 'btn btn-outline-primary my-5 mx-5' onClick={toggleTheme}>Change Theme</button>
    <div style={themeStyles}>Functional  Component</div>
    </>
  )
}
