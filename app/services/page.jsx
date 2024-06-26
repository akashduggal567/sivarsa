'use client';
import Card from "../Card";
import { BestSoftwaresIndustry, GridItem } from "../page";
import { useRouter } from 'next/navigation';

export default function Services() {
  const router = useRouter();

  return <>
    <GridItem>
    </GridItem>
    <GridItem>
      <BestSoftwaresIndustry/>
    </GridItem>
    <GridItem>
    </GridItem>

    <GridItem />
    <GridItem>
      <ServicesProvided />
    </GridItem>
    <GridItem />

    <GridItem>
      <StaffingService onClick={() => router.push("/services/staffing")} />
    </GridItem>
    <GridItem />
    <GridItem>
      <MobileApplication onClick={() => router.push("/mobile-application/1")}/>
    </GridItem>
  </>;
}


function MobileApplication({ onClick }) {
  return <Card
    isHeadline
    backgroundColor={"#2D68FF"}
    textColor={"#A9D6DD"}
    title={"Mobile & Web Application"}
    subtitle=" We can Craft powerful and dynamic solutions"
    isNavigateable
    onClick={onClick}
  />;
}


function StaffingService({ onClick }) {
  return <Card
    isHeadline
    backgroundColor={"#FFC700"}
    textColor={"#9D5209"}
    title={"Staffing"}
    subtitle="We provide skilled professionals across various domains"
    isNavigateable
    onClick={onClick}
  />;
}

function ServicesProvided() {
  return <Card
    // isStats
    backgroundColor={"#393939"}
    textColor={"#F5F5F5"}
    title={<>
      <div>Services</div>
      <div>Provided</div>
    </>}
  />;
}
