'use client';
import Card from "../../Card";
import { GridItem } from "../../page";
import { useRouter } from 'next/navigation';

export default function Services() {
  const router = useRouter();

  return <>
    <GridItem />
    <GridItem>
      <WebDevelopment onClick={() => router.push("/services/2/web-development")} />
    </GridItem>
    <GridItem />

    <GridItem><AIDevelopment onClick={() => router.push("/services/2/ai")} /></GridItem>
    <GridItem>
      <ServicesProvided />
    </GridItem>
    <GridItem><BackendDevelopmentService onClick={() => router.push("/services/2/backend")}/></GridItem>

    <GridItem />
    <GridItem><UIUXDesign onClick={() => router.push("/services/2/ui")}/></GridItem>
    <GridItem />
  </>;
}

function WebDevelopment({ onClick }) {
  return <Card
    isHeadline
    backgroundColor={"#6FF04A"}
    textColor={"#0B6222"}
    title={<>
      <div>Web</div>
      <div>Development</div>
    </>}
    subtitle="Take your business online with a premium website"
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


function AIDevelopment({ onClick }) {
  return <Card
    isHeadline
    backgroundColor={"#FF7E2D"}
    textColor={"#763802"}
    title={<>
      <div>Ai</div>
      <div>Development</div>
    </>}
    subtitle="Unleash the power of AI to transform your business"
    isNavigateable
    onClick={onClick}
  />;
}

function BackendDevelopmentService({ onClick }) {
  return <Card
    isHeadline
    backgroundColor={"#F559C4"}
    textColor={"#F3C7E7"}
    title={"Backend Services"}
    subtitle="Creating robust and scalable APIs to connect your services."
    isNavigateable
    onClick={onClick}
  />;
}

function UIUXDesign({ onClick }) {
  return <Card
    isHeadline
    backgroundColor={"#763DF8"}
    textColor={"#F5F5F5"}
    title={"UI & UX Design"}
    subtitle="Ignite your brand’s potential with stunning, innovative design."
    isNavigateable
    onClick={onClick}
  />;
}