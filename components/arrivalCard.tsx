import React from 'react'
import { Grid,Button,Link,Text, } from '@nextui-org/react'
import BodyCard from './mainBodyCard'

 const BoysCard = () => {
  return (
    <>
    {/* Arrival Button */}

  <Grid.Container gap={2}>
  <Grid xs={4} sm={5}>
    {/* <Button flat auto color="secondary" >
    New Arirvals
  </Button> */}
  <Text weight='bold' color='secondary' css={{letterSpacing:2, backgroundColor:'#EADCF8', p:7 , borderRadius:9, cursor:'context-menu'}} >
     New Arrivals
    </Text>
  </Grid>
  </Grid.Container>
     
     {/* New Arrivals Card... */}

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
    <Grid xs={11} sm={4} md={3} lg={3} xl={3}>
        < BodyCard/>
    </Grid>
    <Grid xs={11} sm={4} md={3} lg={3} xl={3}>
        < BodyCard/>
    </Grid>
    <Grid xs={11} sm={4} md={3} lg={3} xl={3}>
        < BodyCard/>
    </Grid>
    <Grid xs={11} sm={4} md={3} lg={3} xl={3} justify='center' alignItems='center'>
    <Link href='#'>
    <Text color='secondary' weight='bold'  css={{backgroundColor:'#EADCF8', p:7, borderRadius:5, letterSpacing:2}}>
     View All →
     </Text>
  </Link>
    </Grid>
  </Grid.Container>
  </>
  )
}
export default BoysCard