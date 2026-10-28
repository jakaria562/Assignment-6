
import { Suspense, useState } from 'react'
import './App.css'
import Banner from './Banner'
import Models from './Models'

import NavBar from './NavBar'
import StatsSection from './StatsSection'
import GetStart from './GetStart'
import Simple from './Simple'
import Transform from './Transform'
import Footer from './Footer'


 

const getModels = async ()=>{
  const res = await fetch("/data.json")
  return res.json()
}
 const modelPromise = getModels()

function App() {

 const [carts,setCarts] = useState([]);
 console.log(carts)
  return (
    <>
         <NavBar  carts={carts} setCarts ={setCarts}></NavBar>
         <Banner></Banner>
         <StatsSection></StatsSection>
      
        <Models carts={carts} setCarts ={setCarts} modelPromise={modelPromise}></Models>
         <GetStart></GetStart>
         <Simple></Simple>
         <Transform></Transform>
         <Footer></Footer>
         
        
    </>
  )
}

export default App
