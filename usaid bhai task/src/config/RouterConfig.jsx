import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Page1 from '../screens/Page1'
import Page2 from '../screens/Page2'
import Page3 from '../screens/Page3'

const RouterConfig = () => {
  return (
    <div>
      <BrowserRouter >
      <Routes>
          <Route path='/'element={<Page1/>}/>
          
          <Route path='/page2'element={<Page2/>}/>
          <Route path='/page3'element={<Page3/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default RouterConfig
