import React from 'react'
import { Grid,Button,Link,Text } from '@nextui-org/react'
import BodyCard from './mainBodyCard'

const MenCard = () => {
  return (
    <>
    <Grid.Container gap={2}>
  <Grid xs={4} sm={5}>
  <Text weight='bold' color='secondary' css={{letterSpacing:2, backgroundColor:'#EADCF8', p:7 , borderRadius:9, cursor:'context-menu'}} >
     Men
    </Text>
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
    {/* <Grid xs={11} sm={4} md={3} lg={3} xl={3} justify='center' alignItems='center'> */}
    <Link href='#'>
    <Text color='secondary' weight='bold'  css={{backgroundColor:'#EADCF8', p:7, borderRadius:5, letterSpacing:2, boxShadow:"$md"}}>
     View All →
     </Text>
    </Link>
    {/* </Grid> */}
  </Grid.Container>
  </>
  )
}

export default MenCard