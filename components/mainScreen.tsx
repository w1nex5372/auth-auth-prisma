import React from 'react'
import Headas from './Headas'
import { HomeScreen } from './HomeScreen'
const MainScreen = () => {
  return (
    <div className='border'>  
         <Headas></Headas>
         <div>  
               <HomeScreen></HomeScreen>
               
         </div>

    </div>
  )
}

export default MainScreen