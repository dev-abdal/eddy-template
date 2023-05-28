import { Grid } from "@nextui-org/react";
import BodyCard from "./mainBodyCard";
import CardTwo from "./card2"
const  ArrivalGrid = () => {
  return (
    <Grid.Container gap={2} justify="center">
      <Grid xs={12} sm={4}>
        <BodyCard />
      </Grid>
      <Grid xs={12} sm={4}>
        <CardTwo />
      </Grid>
      
    </Grid.Container>
  );
}
export default ArrivalGrid
