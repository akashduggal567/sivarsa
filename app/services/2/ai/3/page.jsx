'use client';
import Card from "../../../../Card";
import { GridItem } from "../../../../page";
import { AICommonTitle } from "../1/page";

export default function WebWonderLanguages() {
    return <>
        <GridItem />
        <GridItem><Discovery /></GridItem>
        <GridItem />

        <GridItem><AICommonTitle /></GridItem>
        <GridItem><IP /></GridItem>

        <GridItem />

        <GridItem />
        <GridItem><Development /></GridItem>
        <GridItem><Monitoring /></GridItem>

    </>;
}

function Development() {
    return <Card
        isHeadline
        backgroundColor={"linear-gradient(0deg, #2B2210 12.06%, #7E4F10 197.46%)"}
        textColor={"#F1C5AA"}
        title={"Development"}
        subtitle="Tailoring AI solutions to fit your specific needs."
        subtitleColor="rgba(241, 197, 170, 0.80)"
    />;
}


function Discovery() {
    return <Card
        isHeadline
        backgroundColor={"linear-gradient(0deg, #2B2210 12.06%, #7E4F10 197.46%)"}
        textColor={"#F1C5AA"}
        title={"Discovery"}
        subtitle="We decode your needs and set the AI wheels in motion."
        subtitleColor="rgba(241, 197, 170, 0.80)"
    />;
}

function Monitoring() {
    return <Card
        isHeadline
        backgroundColor={"linear-gradient(0deg, #2B2210 12.06%, #7E4F10 197.46%)"}
        textColor={"#F1C5AA"}
        title={"Monitoring"}
        subtitle="Implementing the solution and keeping an eagle eye on its performance."
        subtitleColor="rgba(241, 197, 170, 0.80)"
    />;
}


function IP() {
    return <Card
        isHeadline
        backgroundColor={"linear-gradient(0deg, #2B2210 12.06%, #7E4F10 197.46%)"}
        textColor={"#F1C5AA"}
        title={"Integration Planning"}
        subtitle="Crafting a roadmap for seamless AI integration."
        subtitleColor="rgba(241, 197, 170, 0.80)"
    />;
}
