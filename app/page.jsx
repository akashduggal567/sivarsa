'use client';
import Card from "./Card";
import styled from 'styled-components';
import "./navigation.css";
import * as animationData from '../public/grey_cube.json'

export default function Home() {
  return <>
    <GridItem />
    <GridItem>
      <BestSoftwaresIndustry />
    </GridItem>
    <GridItem />

    <GridItem />
    <GridItem />
    <GridItem />

    <GridItem />
    <GridItem />
    <GridItem />
  </>;

}

const BestSoftwaresIndustry = () => {
  return <Card
    backgroundColor={"#545454"}
    textColor={"#F5F5F5"}
    title={<div>
      <div>Weaving Software</div>
      <div>into magical journeys.</div> 
    </div>}
    animationData={animationData}
  />;
}

export { BestSoftwaresIndustry };


function BackendDevelopmentService() {
  return <Card
    backgroundColor={"#F559C4"}
    textColor={"#F3C7E7"}
    title={"Backend Services"}
    subtitle="Creating robust and scalable APIs to connect your services."
    isNavigateable
  />;
}

export const GridItem = styled.div`
    flex: 1 0 33.33%; /* Make each item take up 1/3rd of the space */
    height: 100%;
    background-color: #171717;
`;