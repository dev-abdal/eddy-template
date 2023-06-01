import React from 'react'
import { Grid,Text } from '@nextui-org/react'
import FooterEddyManue from './footerEddyMenu'
import FooterSiteManue from './footerSiteMenu'
import FooterCustomerMenu from './footerCustomerMenu'
import FooterFollowButton from './footerFollowButton'


const FooterBody = () => {
  return (
    
    <div
     style={{
      backgroundColor:'#481878',
      borderTopLeftRadius:'30px',
      borderTopRightRadius:'30px',
     }}
    >
     <Grid.Container gap={5} justify='center'>
      
      {/* Eddy menu's */}

      <Grid justify='center'>
     
       <FooterEddyManue />
      
      </Grid>

      {/*  Site Manue */}

      <Grid>
        <FooterSiteManue />
      </Grid>

       {/* Customer Support */}
      <Grid>
       <FooterCustomerMenu />
      </Grid>

      {/* Follow Button  */}
      <Grid>
        <FooterFollowButton />
      </Grid>       
    </Grid.Container>
      
       {/* Copyrigt Section */}

     <Grid.Container justify='center'>
      <Grid justify='center'>
      <Text color='white' weight='normal' transform='uppercase' >
        Copyright &copy; 2023 eddy. All rights Reserved
      </Text>
      </Grid>
     </Grid.Container>
     
    </div>
  )
}

export default FooterBody