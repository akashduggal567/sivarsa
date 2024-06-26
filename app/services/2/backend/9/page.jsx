'use client';
import { useRouter } from "next/navigation";
import { GridItem } from "../../../../page";
import Card from "../../../../Card";

export default function AppMakers() {
    const router = useRouter();

    return <>
        <GridItem><Title /></GridItem>

        <GridItem>
        </GridItem>
        <GridItem><Scalability /></GridItem>


        <GridItem>
        </GridItem>
        <GridItem><Performance /></GridItem>
        <GridItem></GridItem>



        <GridItem>
        </GridItem>
        <GridItem></GridItem>
        <GridItem><Security /></GridItem>
    </>;
}

function Title() {
    return <Card
        isHeadline
        isHeadlineNumberOnly
        // backgroundColor={"linear-gradient(180deg, #31B10C 0%, #171717 100%)"}
        textColor={"#C7DFB8"}
        title={"Why Us?"}
        backgroundImage={<img id="noisy_bg" src="/backend_noisy_gradient.png" />}
        headlineStyle={{ position: "absolute", top: 20}}
    />;
}


function Scalability() {
    return <Card
        isHeadline
        backgroundColor={"#CD64F2"}
        textColor={"#F3C7E7"}
        title="Scalability"
        subtitle="Solutions that grow with your business."
    />;
}

function Performance() {
    return <Card
        isHeadline
        backgroundColor={"#AE668B"}
        textColor={"#F3C7E7"}
        title="Performance"
        subtitle="Fast and reliable backend operations.."
    />;
}

function Security() {
    return <Card
        isHeadline
        backgroundColor={"#F19AD9"}
        textColor={"#AD3284"}
        title="Security"
        subtitle="Ensuring your data and operations are secure."
    />;
}