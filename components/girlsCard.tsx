import React from 'react'
import { Grid,Button,Input,Text} from '@nextui-org/react'
import BodyCard from './mainBodyCard'
import CardThree from './cardThree'
import Image from 'next/image'

 const GirlsCard = () => {

  return (
    <>
    {/* Arrival Button */}

  <Grid.Container gap={2} justify='space-between'>
  <Grid xs={4} sm={5}>
    {/* <Button flat auto color="secondary" >
    New Arirvals
  </Button> */}
  <Text weight='bold' color='secondary' css={{letterSpacing:2, backgroundColor:'#EADCF8', p:7 , borderRadius:9, cursor:'context-menu'}} >
     Girls
    </Text>
  </Grid>
  <Grid>
      <Button
      auto flat color='secondary'
      icon={
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-big-right-filled" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#6f32be" fill="none" stroke-linecap="round" stroke-linejoin="round">
         <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
         <path d="M12.089 3.634a2 2 0 0 0 -1.089 1.78l-.001 2.586h-6.999a2 2 0 0 0 -2 2v4l.005 .15a2 2 0 0 0 1.995 1.85l6.999 -.001l.001 2.587a2 2 0 0 0 3.414 1.414l6.586 -6.586a2 2 0 0 0 0 -2.828l-6.586 -6.586a2 2 0 0 0 -2.18 -.434l-.145 .068z" stroke-width="0" fill="currentColor" />
        </svg>
    
         }
      />      
    </Grid>
  </Grid.Container>
     
     {/* New Arrivals Card... */}

  <Grid.Container gap={2} justify='center'>
    <Grid xs={11} sm={4} md={3} lg={3} xl={3}>
        <CardThree />
    </Grid>
    <Grid xs={11} sm={4} md={3} lg={3} xl={3}>
        < BodyCard/>
    </Grid>
    <Grid xs={11} sm={4} md={3} lg={3} xl={3}>
        < BodyCard/>
    </Grid>
    <Grid xs={11} sm={4} md={3} lg={3} xl={3}>
        < BodyCard/>
    </Grid>
   
  </Grid.Container>
  <Grid.Container justify='center'>
    <Grid>
    <Input
     placeholder="Email for subcribe" 
     contentRight={
      <Button auto color='gradient'>
       <svg xmlns="http://www.w3.org/2000/svg"  width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
           <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
           <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
        </svg>
      </Button>
     }
     />;
    </Grid>
  </Grid.Container>
  </>
  )
}
export default GirlsCard