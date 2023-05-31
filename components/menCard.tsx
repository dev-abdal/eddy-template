import React from 'react'
import { Grid,Button,Link,Text } from '@nextui-org/react'
import BodyCard from './mainBodyCard'

const MenCard = () => {
  return (
    <>
    <Grid.Container gap={2} justify='space-between'>
  <Grid xs={4} sm={5}>
  <Text weight='bold' color='secondary' css={{letterSpacing:2, backgroundColor:'#EADCF8', p:7 , borderRadius:9, cursor:'context-menu'}} >
     Men
    </Text>
  </Grid>
   <Grid>
      <Button
      auto flat color='secondary'
      icon={
        <svg xmlns="http://www.w3.org/2000/svg"  width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#6f32be" fill="none" stroke-linecap="round" stroke-linejoin="round">
         <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
         <path d="M12.089 3.634a2 2 0 0 0 -1.089 1.78l-.001 2.586h-6.999a2 2 0 0 0 -2 2v4l.005 .15a2 2 0 0 0 1.995 1.85l6.999 -.001l.001 2.587a2 2 0 0 0 3.414 1.414l6.586 -6.586a2 2 0 0 0 0 -2.828l-6.586 -6.586a2 2 0 0 0 -2.18 -.434l-.145 .068z" stroke-width="0" fill="currentColor" />
        </svg>
    
         }
      />      
    </Grid>
  </Grid.Container>

 
  <Grid.Container gap={2} justify='center'>
    <Grid xs={11} sm={4} md={3} lg={3} xl={3}>
        <BodyCard />
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
  </>
  )
}

export default MenCard