import React from 'react'
import Category from '../../components/Category/Category'
import Button from '../../components/Button/Button'

const Home = () => {
  return (
    <div class="container-fluid p-0 "  style={{height:"100vh" , backgroundColor: "grey"  }}>

          <div class="container-fluid " style={{height:"70vh"  , backgroundColor: "white"}}>
          
              <Category/>

          </div> 
         <Button/>
    </div>
  )
}

export default Home