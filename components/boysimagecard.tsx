import React from 'react'
    import { Card, Col, Row, Button, Text } from "@nextui-org/react";

const BoysImageCard = () => {
  return (
  <Card isPressable   css={{ w: "100%", h: "500px"}}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="warning"
        css={{letterSpacing:2}}
        >
          New
        </Text>
        <Text h3 color="secondary">
        Mens Cream Sherwani
        </Text>
      </Col>
    </Card.Header>
    <Card.Body css={{ p: 0 }}>
      <Card.Image
        src='https://m.media-amazon.com/images/I/71qexXcSUzL._AC_UL320_.jpg'
        width="100%"
        height="100%"
        objectFit="contain"
        alt="Boys"
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
          <Text b color="#00000" size={24}>
           $14.99
          </Text>
          <Text color="#00000" size={13}  >
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

export default BoysImageCard