import React from 'react'
import { Text,Row,Link } from '@nextui-org/react'
const FooterEddyManue = () => {
  return (
    <>
    <Text h4 color='white' css={{pl:3, letterSpacing:'2'}}>
    EDDY
  </Text>
  <Row>
    <Link href='#'>
       <Text  color='white' css={{pt:6}}>
           Women
       </Text>
   </Link>
  </Row>


   <Row>
    <Link href='#'>
       <Text  color='white'  css={{pt:6}}>
        Men
      </Text>
    </Link>
  </Row>


  <Row>
      <Link href='#'>
         <Text  color='white'  css={{pt:6}}>
            Boys
          </Text>
      </Link>
 </Row>

 <Row>
    <Link href='#'>
       <Text  color='white' css={{pt:6}}>
           Girls
       </Text>
   </Link>
  </Row>

  <Row>
    <Link href='#'>
       <Text  color='white' css={{pt:6}}>
           New Arrivals
       </Text>
   </Link>
  </Row>

  <Row>
    <Link  href='#'>
       <Text  color='white' css={{ pt:6}}>
           Fragrance
       </Text>
   </Link>
  </Row>

  <Row>
    <Link href='#'>
       <Text  color='white' css={{pt:6}}>
           Sale
       </Text>
   </Link>
  </Row>


  <Row>
    <Link href='#'>
       <Text  color='white' css={{pt:6}}>
           Gift Card
       </Text>
   </Link>
  </Row>
  </>
  )
}

export default FooterEddyManue