import React  from 'react'
import FunctionalComponent  from './FunctionalComponent'
// import  ClassComponent  from './ClassComponent'
import { ThemeProvider } from './ThemeContext'

export default function ContextHook() {

  return (
      <ThemeProvider> 
      <FunctionalComponent/>
      {/* <ClassComponent/>   */}
      </ThemeProvider>    


  )
}

