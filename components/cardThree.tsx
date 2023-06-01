import React from 'react'
import { Card, Col, Row, Button, Text } from '@nextui-org/react';

const CardThree = () => {
  return (
  <Card isPressable  css={{ w: "100%%", h: "500px"}}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight="bold" transform="uppercase" 
        // color="#ffffffAA"
        color='warning'
        css={{letterSpacing:2 }}
        >
          Girls
        </Text>
        <Text h3 color="secondary">
        SAYFUT
        </Text>
      </Col>
    </Card.Header>
    <Card.Body css={{ p: 0 }}>
      <Card.Image
        src="https://i5.walmartimages.com/asr/548ffce9-2384-42a2-882e-438502145429_1.8be7619dae47bf2f1913e3ac09cdd858.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff"
        width="100%"
        height="100%"
        objectFit="cover"
        alt="Card example background"
      />
    </Card.Body>
    <Card.Footer
      isBlurred
      css={{
        position: "absolute",
        bgBlur: "#ffffff66",
        borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
        bottom: 0,
        zIndex: 1,
      }}
    >
      <Row>
        <Col>
          <Text b color="#000000" size={24}>
            $19.99
          </Text>
          <Text color="warning"  weight='bold' size={13} css={{
            letterSpacing:'$wide',
            textTransform:'capitalize'
          }}>
            *out of stock
          </Text>
        </Col>
        <Col>
          <Row justify="flex-end">
            <Button flat auto rounded color="secondary">
              <Text
                css={{ color: "inherit" }}
                size={12}
                weight="bold"
                transform="uppercase"
              >
                Add to Cart
              </Text>
            </Button>
          </Row>
        </Col>
      </Row>
    </Card.Footer>
  </Card>
);
  
}

export default CardThree