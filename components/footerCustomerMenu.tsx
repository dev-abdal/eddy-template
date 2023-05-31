import React from 'react'
import { Text,Row,Link } from '@nextui-org/react'
import FooterFollowButton from './footerFollowButton'
const footerCustomerMenu = () => {
  return (
    <>
    <Text h4 color='white' css={{pl:1}}>
    Support
    </Text>
 
    <Row>
    <Link href='#'>
       <Text  color='white' css={{pt:6}}>
           Delivery &#38; Return
       </Text>
   </Link>
  </Row>

  <Row>
    <Link href='#'>
       <Text  color='white' css={{pt:6}}>
          Contact us
       </Text>
   </Link>
  </Row>

  <Row>
    <Link href='tel:+012345678'>
       <Text  color='white' css={{pt:6}}>
        Customer Care&#58; +1 012345678
       </Text>
   </Link>
   
  </Row>

  
 
  </>
  )
}

export default footerCustomerMenu