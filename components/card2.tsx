import React from 'react'
    import { Card, Col, Row, Button, Text } from "@nextui-org/react";

const CardTwo = () => {
  return (
  <Card  isPressable  css={{ w: "100%", h: "500px"}}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text  size={12} weight="bold" transform="uppercase" color="warning"
        css={{letterSpacing:2 }}
        >
        Women
        </Text>
        <Text h3 color="secondary">
        Unstitch
        </Text>
      </Col>
    </Card.Header>
    <Card.Body css={{ p: 0 }}>
      <Card.Image
        src="https://assets0.mirraw.com/images/7538058/MONSOON-2851_4_zoom.jpg?1573191332"
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
          <Text color="#00000" size={13}>
            In Stock
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

export default CardTwo