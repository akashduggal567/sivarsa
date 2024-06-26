'use client';
import { useRouter } from "next/navigation";
import { GridItem } from "../../page";
import Card from "../../Card";

export default function AppMakers() {
    const router = useRouter();

    return <>
        <GridItem><Discovery /></GridItem>
        <GridItem><Design /></GridItem>
        <GridItem><Development /></GridItem>
        
        <GridItem><Testing /></GridItem>
        <GridItem><Development /></GridItem>
        <GridItem>
        </GridItem>
        
        <GridItem>
        </GridItem>
        <GridItem />
        <GridItem><CommonTitle /></GridItem>
    </>;
}

function CommonTitle({ onClick }) {
    return <Card
        isHeadline
        isHeadlineNumberOnly
        backgroundColor={"#101D68"}
        textColor={"#83C7E6"}
        title={"App Makers"}
    />;
}

function Discovery() {
    return <Card
        isHeadline
        backgroundColor={"linear-gradient(160deg, #1846BC 1.19%, #171717 82.21%)"}
        textColor={"#C7DFB8"}
        title={"Discovery"}
        subtitle="Understanding your vision and goals."
    />;
}

function Design() {
    return <Card
        isHeadline
        backgroundColor={"linear-gradient(160deg, #1846BC 1.19%, #171717 82.21%)"}
        textColor={"#C7DFB8"}
        title={"Design"}
        subtitle="Crafting engaging and user-friendly interfaces."
    />;
}

function Deployment() {
    return <Card
        isHeadline
        backgroundColor={"linear-gradient(160deg, #1846BC 1.19%, #171717 82.21%)"}
        textColor={"#C7DFB8"}
        title={"Deployment"}
        subtitle="Launching and keeping your site running smoothly."
    />;
}

function Development() {
    return <Card
        isHeadline
        backgroundColor={"linear-gradient(160deg, #1846BC 1.19%, #171717 82.21%)"}
        textColor={"#C7DFB8"}
        title={"Development"}
        subtitle="Building robust and scalable websites."
    />;
}

function Testing() {
    return <Card
        isHeadline
        backgroundColor={"linear-gradient(160deg, #1846BC 1.19%, #171717 82.21%)"}
        textColor={"#C7DFB8"}
        title={"Testing"}
        subtitle="Ensuring flawless performance across all devices."
    />;
}