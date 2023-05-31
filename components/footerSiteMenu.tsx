import React from 'react'
import { Text,Row,Link } from '@nextui-org/react'
const FooterSiteManue = () => {
  return (
    <>
    <Text h4 color='white' css={{pl:1 }}>
     Gerrnal
    </Text>
 
    <Row>
    <Link href='#'>
       <Text  color='white' css={{pt:6}}>
           About us
       </Text>
   </Link>
  </Row>

  <Row>
    <Link href='#'>
       <Text  color='white' css={{pt:6}}>
           Privacy Policy
       </Text>
   </Link>
  </Row>


   <Row>
    <Link href='#'>
       <Text  color='white'  css={{pt:6}}>
        Disclamer
      </Text>
    </Link>
  </Row>


  <Row>
      <Link href='#'>
         <Text  color='white'  css={{pt:6}}>
            Term &#38; Conditions
          </Text>
      </Link>
 </Row>

 <Row>
    <Link href='#'>
       <Text  color='white' css={{pt:6}}>
           FAQs
       </Text>
   </Link>
  </Row>

  <Row>
    <Link href='#'>
       <Text  color='white' css={{pt:6}}>
          Payment Methods
       </Text>
   </Link>
  </Row>

  <Row>
    <Link  href='#'>
       <Text  color='white' css={{ pt:6}}>
           Track Order
       </Text>
   </Link>
  </Row>

  <Row>
    <Link href='#'>
       <Text  color='white' css={{pt:6}}>
           Corporate Business
       </Text>
   </Link>
  </Row>
  </>
  )
}

export default FooterSiteManue