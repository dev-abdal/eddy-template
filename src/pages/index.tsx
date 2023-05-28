import React from 'react'
import AppBar from '../../components/navigation'
import Head  from 'next/head'
import WomenCard from "../../components/womenCard"
import ArrivalCard from "../../components/arrivalCard"
import MenCard from "../../components/menCard"
import styles from "../styles/Home.module.css"
import BoysCard from "../../components/boysCard"
import GirlsCard from "../../components/girlsCard"
export default function index() {
    return (
    <>
    <Head>
    <title>EDDY: Shopping Store</title>
    <meta name="description" content="A shopping Store with nextjs" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" type="image/png"  href="/icon.png" /> 
</Head>
<main className={styles.main} >
  
  <AppBar/>
  
  {/* <div style={{marginTop:"10px", marginLeft:"10px"}} >
  <Button flat auto color="secondary" >
    New Arirvals →
  </Button>
  </div> */}
 
  {/* Arrivals Home Cards */}

      <ArrivalCard />
  
  {/* Women Home Cards  */}
   
      <WomenCard />
   
   {/* Men Home Cards */}
     
      <MenCard />

   {/* Boys Home Cards  */}

      <BoysCard />

   {/* Girls Home Cards  */}
    
     <GirlsCard />

</main>
</>
    )
}